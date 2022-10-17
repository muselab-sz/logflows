"use strict";

let {axios} = require("../../helper/axios");
let {mylog, updateLog} = require("../../helper/log");
let {autoResendInterceptor} = require("../../helper/resendInterceptor");

const createpickuupOrder = async (ctx, pickupParam, order) => {
    const resendTimes = autoResendInterceptor(ctx, "create");
    // console.log(pickupParam);

    try {
        let res = await axios("POST", "/merchant/orders/single", pickupParam);
        if (res.status != 201) {
            if (resendTimes < 3) {
                return await createpickuupOrder(ctx, pickupParam, order);
            } else {
                updateLog(
                    {id: ctx.logResult.id},
                    {
                        position: "connector To pickupp",
                        msg: res.response.data.meta.error_message,
                        to_body: {
                            method: "POST",
                            path: "/merchant/orders/single",
                            body: pickupParam,
                        },
                    }
                );
                ctx.body = res.response.data.meta.error_message || "internal error";
            }
        } else {
            console.log("成功", res.data.data.id);
            try {
                const updateOrder = await strapi.query("api::order.order").update({
                    where: {id: order.id},
                    data: {
                        pickupp_order_id: res.data.data.id,
                    },
                });
                ctx.body = updateOrder;
            } catch (error) {
                updateLog(
                    {id: ctx.logResult.id},
                    {
                        position: "connector To pickupp",
                        msg: JSON.stringify(error),
                        to_body: {
                            method: "POST",
                            path: "/merchant/orders/single",
                            body: pickupParam,
                        },
                    }
                );
                ctx.body = error;
            }
        }
    } catch (error) {
        strapi.log.info("catch error:", error);
        ctx.body = error;
    }
};

const deletepickuupOrder = async (ctx, deleteResult) => {
    const resendTimes = autoResendInterceptor(ctx, "delete");
    if (deleteResult != null) {
        try {
            let path = "/merchant/orders/" + deleteResult.pickupp_order_id;
            let method = "DELETE";
            let res = await axios(method, path, {});
            //   console.log("res", res);
            if (res.status != 200) {
                if (resendTimes < 3) {
                    return await deletepickuupOrder(ctx, data);
                } else {
                    ctx.body = res.response.data.meta.error_message;
                    await updateLog(
                        {id: ctx.logResult.id},
                        {
                            position: "connector To pickupp",
                            msg: res.response.data.meta.error_message,
                            to_body: {
                                method: "DELETE",
                                path: path,
                                body: {},
                            },
                        }
                    );
                }
            } else {
                //D3.更新记录到数据库，说明日志已完成推送
                ctx.body = deleteResult;
            }
        } catch (error) {
            if (resendTimes < 3) {
                return await deletepickuupOrder(ctx, data);
            } else {
                ctx.body = error;
                await updateLog(
                    {id: ctx.logResult.id},
                    {
                        position: "connector To pickupp",
                        msg: JSON.stringify(error),
                        to_body: {
                            method: "DELETE",
                            path: path,
                            body: {},
                        },
                    }
                );
            }
        }
    }
};

const _createOrder = async (ctx, next) => {
    const resendTimes = autoResendInterceptor(ctx, "createOrder");
    //D1.写入数据库order表和waypoint表
    var date = new Date();
    var dateStr =
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDay() +
        date.getHours() +
        ":" +
        date.getMinutes +
        ":" +
        date.getSeconds;
    var data = {
        compid: ctx.request.body.compid,
        shipref: ctx.request.body.shipref,
        shiprefid: ctx.request.body.shiprefid,
        secondref: ctx.request.body.secondref,
        remarks: ctx.request.body.remarks,
        gw: ctx.request.body.gw,
        gwunit: ctx.request.body.gwunit,
        label: ctx.request.body.label,
        totalqty: ctx.request.body.totalqty,
        created_at: dateStr,
        created_by_id: ctx.state.user.id,
        updated_by_id: ctx.state.user.id,
        waypoints: ctx.request.body.waypoints,
    };

    const order = await strapi.db.query("api::order.order").create({
        data: data,
    });

    try {
        //D2.向pickupp调用createPickuppOrder接口
        var service_time = -1;
        switch (ctx.state.user.service_type) {
            case "four_hours":
            case "same_day":
            case "exchange":
                service_time = -1;
                break;
            case "express":
            case "next_day":
            case "collection":
                service_time = ctx.state.user.service_time;
                break;
        }
        // 时间格式处理
        const regionResult = await strapi.db.query("api::region.region").findOne({
            select: ["*"],
            where: {
                region_short: ctx.state.user.region.replace("'", "").replace("'", ""),
            },
        });

        console.log(
            "here1",
            ctx.state.user.region.replace("'", "").replace("'", "")
        );
        console.log("here1.5", regionResult);
        var pickup_time = ctx.request.body.waypoints[0].datetimeto;
        var tmp = pickup_time.split(" ");
        pickup_time = tmp[0] + " " + regionResult?.time;
        var d = new Date(pickup_time);
        pickup_time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + "T" + regionResult?.time;
        console.log("日期：")
        console.log(pickup_time)

        var body = {
            pickup_contact_person: ctx.request.body.waypoints[0].companyname,
            pickup_contact_phone: ctx.request.body.waypoints[0].phone,
            pickup_address_line_1: ctx.request.body.waypoints[0].address,
            pickup_time: pickup_time,
            pickup_latitude: ctx.request.body.waypoints[0].lat,
            pickup_longitude: ctx.request.body.waypoints[0].lng,

            dropoff_contact_person: ctx.request.body.waypoints[1].contactperson,
            dropoff_contact_phone: ctx.request.body.waypoints[1].phone,
            dropoff_address_line_1: ctx.request.body.waypoints[1].address,
            dropoff_latitude: ctx.request.body.waypoints[1].lat,
            dropoff_longitude: ctx.request.body.waypoints[1].lng,
            dropoff_notes: ctx.request.body.remarks,

            region: ctx.state.user.region, // 从请求接口用户来
            weight: ctx.request.body.gw.toString(),
            origin: "API",
            client_reference_number: ctx.request.body.shipref,
            enforce_validation: true,
            has_delivery_note: false,
            service_type: ctx.state.user.service_type, //service_type,// 从请求接口用户来
            service_time: service_time, //service_time // 从请求接口用户来
        };

        //D2.向pickupp调用createOrder接口
        return await createpickuupOrder(ctx, body, order);
    } catch (err) {
        //D3.异常则进行下一次的间隔时间调用
        strapi.log.info("error createOrder" + err);
        if (resendTimes < 3) {
            return await _createOrder(ctx);
        } else {
            ctx.body = err;
        }
    }
};

module.exports = {
    // logflows tms request this api to create order
    createOrder: async (ctx, next) => {
        //D0.记录日志
        const log = {
            shipref: ctx.request.body.shipref,
            action: "create",
            from: "logflows",
            to: "pickupp",
            from_time: new Date(),
            from_header: ctx.request.headers,
            from_body: ctx.request.body,
            compid: ctx.state.user.compid,
            position: "logflows To connector",
        };
        const logResult = await mylog(log);
        ctx.logResult = logResult;

        const isCurrentOrder = await strapi.db.query("api::order.order").findOne({
            select: ["*"],
            where: {shipref: ctx.request.body.shipref},
        });

        if (isCurrentOrder) {
            ctx.body = '订单号：' + ctx.request.body.shipref + ' 已存在';
        } else {
            return await _createOrder(ctx);
        }
    },
    resendOrder: async (ctx, next) => {
        strapi.log.info("resendOrder...");
        //D0.记录日志
        const log = {
            shipref: ctx.request.body.shipref,
            action: "resend",
            from: "logflows",
            to: "pickupp",
            from_time: new Date(),
            from_header: ctx.request.headers,
            from_body: {},
            compid: {},
            position: "logflows To connector",
        };
        const logResult = await mylog(log);
        const {shipref} = ctx.request.body;
        const currentOrder = await strapi.db.query("api::order.order").findOne({
            select: ["*"],
            where: {shipref: shipref},
        });

        console.log(currentOrder);

        if (!currentOrder) {
            return (ctx.body = "not found this shipref");
        }
        const user = await strapi.db
            .query("plugin::users-permissions.user")
            .findOne({where: {id: currentOrder.created_by_id}, populate: true});
        ctx.request.body = currentOrder;
        ctx.state.user = user;
        return await _createOrder(ctx);
    },
    // logflows tms request this api to create order
    updateOrder: async (ctx, next) => {
        //D0.记录日志
        const log = {
            shipref: ctx.request.body.shipref,
            action: "update",
            from: "logflows",
            to: "pickupp",
            from_time: new Date(),
            from_header: ctx.request.headers,
            from_body: ctx.request.body,
            compid: ctx.state.user.compid,
            position: "logflows To connector",
        };
        const logResult = await mylog(log);
        //D1.写入数据库order表和waypoint表
        let data = {
            compid: ctx.request.body.compid,
            shipref: ctx.request.body.shipref,
            shiprefid: ctx.request.body.shiprefid,
            secondref: ctx.request.body.secondref,
            remarks: ctx.request.body.remarks,
            gw: ctx.request.body.gw,
            gwunit: ctx.request.body.gwunit,
            label: ctx.request.body.label,
            totalqty: ctx.request.body.totalqty,
            created_by_id: ctx.state.user.id,
            updated_by_id: ctx.state.user.id,
        };

        const _updateOrder = async (ctx) => {
            const resendTimes = autoResendInterceptor(ctx, "update");
            try {
                var updateOrder = await strapi.query("api::order.order").update({
                    where: {id: ctx.request.body.id},
                    data: data,
                });
                strapi.log.info("resultOrder" + JSON.stringify(updateOrder));
                //D2.向pickupp调用updateOrder接口
                let path = "/merchant/orders/" + updateOrder.pickupp_order_id;
                let method = "PUT";
                var body = {
                    pickup_contact_person: ctx.request.body.waypoints[0].companyname,
                    pickup_contact_phone: ctx.request.body.waypoints[0].phone,
                    pickup_notes: ctx.request.body.waypoints[0].pickup_notes,
                    dropoff_contact_person: ctx.request.body.waypoints[1].contactperson,
                    dropoff_contact_phone: ctx.request.body.waypoints[1].phone,
                    dropoff_notes: ctx.request.body.waypoints[1].dropoff_notes,
                };

                try {
                    let res = await axios(method, path, body);
                    if (res.status != 200) {
                        strapi.log.info("Pickuup api error:");
                        strapi.log.info(res);
                        if (resendTimes < 3) {
                            return await _updateOrder(ctx);
                        } else {
                            await updateLog(
                                {id: logResult.id},
                                {
                                    position: "connector To pickupp",
                                    msg: res.response.data.meta.error_message,
                                    to_body: {
                                        method: method,
                                        path: path,
                                        body: body,
                                    },
                                }
                            );
                            ctx.body = res.response.data.meta.error_message;
                        }
                    } else {
                        //D3.更新记录到数据库，说明日志已完成推送
                        ctx.body = updateOrder;
                    }
                } catch (error) {
                    console.log(error);
                    if (resendTimes < 3) {
                        return await _updateOrder(ctx);
                    } else {
                        await updateLog(
                            {id: logResult.id},
                            {
                                position: "connector To pickupp",
                                msg: JSON.stringify(error),
                                to_body: {
                                    method: method,
                                    path: path,
                                    body: body,
                                },
                            }
                        );
                        ctx.body = err;
                    }
                }
            } catch (err) {
                //D3.异常则进行下一次的间隔时间调用
                strapi.log.info("err:");
                strapi.log.info(err);
                if (resendTimes < 3) {
                    return await _updateOrder(ctx);
                } else {
                    ctx.body = err;
                }
            }
        };
        return await _updateOrder(ctx);
    },
    // logflows tms request this api to create order
    deleteOrder: async (ctx, next) => {
        //D0.记录日志
        const log = {
            shipref: ctx.request.body.shipref,
            action: "delete",
            from: "logflows",
            to: "pickupp",
            from_time: new Date(),
            from_header: ctx.request.headers,
            from_body: ctx.request.body,
            compid: ctx.state.user.compid,
            position: "logflows To connector",
        };
        const logResult = await mylog(log);
        ctx.logResult = logResult;
        const _deleteOrder = async (ctx) => {
            const resendTimes = autoResendInterceptor(ctx, "deleteOrder");
            try {
                //D1.删除order表和waypoint表对应记录
                const deleteResult = await strapi.db
                    .query("api::order.order")
                    .delete({
                        where: {
                            shipref: ctx.request.body.shipref,
                            compid: ctx.request.body.compid,
                            shiprefid: ctx.reqeust.body.shiprefid
                        }
                    });
                console.log("deleteResult", deleteResult);
                return await deletepickuupOrder(ctx, deleteResult);
            } catch (err) {
                strapi.log.info("err:");
                strapi.log.info(err);
                if (resendTimes < 3) {
                    return await _deleteOrder(ctx);
                } else {
                    ctx.body = error;
                }
            }
        };
        return await _deleteOrder(ctx);
    },
    // logflows tms request this api to create order
    getOrder: async (ctx, next) => {
        try {
            const {shipref} = ctx.query;
            //D0.获取order表和waypoint表对应记录
            const result = await strapi.db.query("api::order.order").findOne({
                select: ["*"],
                where: {shipref: shipref},
            });
            ctx.body = result;
        } catch (err) {
            ctx.body = err;
        }
    },
    // logflows tms request this api to create order
    getOrders: async (ctx, next) => {
        try {
            //D0.获取order表列表数据和waypoint表对应记录
            const entries = await strapi.db.query("api::order.order").findMany({
                select: ["*"],
                where: {},
                orderBy: {publishedAt: "DESC"},
                limit: 10,
            });
            strapi.log.info("123456");
            ctx.body = entries;
        } catch (err) {
            ctx.body = err;
        }
    },
    //pickup update order and req this, such as status update,common status,other statuses
    //pickupp向系统推送status状态值
    //For simple validation that the request is from Pickupp server, we added Pickupp-Origin: 1 in the request header.
    pickuppUpdateOrder: async (ctx, next) => {
        try {
            const log = {
                shipref: ctx.request.body.client_reference_number,
                action: "pickupp update status",
                from: "pickupp",
                to: "logflows",
                from_time: new Date(),
                from_header: ctx.request.headers,
                from_body: ctx.request.body,
                compid: 0,
                position: "pickupp To connector",
            };
            const logResult = await mylog(log);
            var headers = ctx.request.header;
            if (headers["pickupp-origin"] == 1) {
                //D0.日志记录
                //D1.更新order记录
                var data = {
                    attempts: ctx.request.body.attempts,
                    pickup_attempts: ctx.request.body.pickup_attempts,
                    dropoff_attempts: ctx.request.body.dropoff_attempts,
                    signature_url: ctx.request.body.signature_url,
                    delivery_agent_location: ctx.request.body.delivery_agent_location,
                    tracking_url: ctx.request.body.tracking_url,
                    cancel_reason_type: ctx.request.body.cancel_reason_type,
                    warehouse_id: ctx.request.body.warehouse_id,
                    location_barcode: ctx.request.body.location_barcode,
                    trip_dropoff_address: ctx.request.body.trip_dropoff_address,
                    delivery_agent_name: ctx.request.body.delivery_agent_name,
                    delivery_agent_phone: ctx.request.body.delivery_agent_phone,
                    reschedule_url: ctx.request.body.reschedule_url,
                    detail_reason: ctx.request.body.detail_reason,
                    status: ctx.request.body.status,
                    unable_to_deliver_reason: ctx.request.body.unable_to_deliver_reason,
                };

                //pickuup->endpioint -> endpoint_result
                //endpoint_result
                try {
                    const order = await strapi.db.query("api::order.order").findOne({
                        select: ["*"],
                        where: {shipref: ctx.request.body.client_reference_number},
                    });
                    if (order) {
                        const user = await strapi.db
                            .query("plugin::users-permissions.user")
                            .findOne({
                                where: {id: order.created_by_id},
                                populate: true,
                            });

                        let path = user.endpoint;
                        let method = "POST";
                        let res = await axios(method, path, data);
                        data.endpoint_result = res;
                    }
                } catch (error) {
                    data.endpoint_result = {data: error};
                }

                var resultOrder = await strapi.query("api::order.order").update({
                    where: {shipref: ctx.request.body.client_reference_number},
                    data: data,
                });

                ctx.body = resultOrder;
            } else {
                throw Error("illegle");
            }
        } catch (err) {
            ctx.body = err;
        }
    },
};
