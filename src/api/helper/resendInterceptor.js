let resendPool = [];

module.exports = {
  autoResendInterceptor: (ctx, type) => {
    const currentOrder = ctx.request.body;
    let i = resendPool.findIndex(
      (i) => i.shipref == currentOrder.shipref && i.type == type
    );
    if (i != -1) {
      let t = resendPool[i];
      if (new Date().getTime() - t.resendDate > 10 * 60 * 1000) {
        t.resendDate = new Date().getTime();
        t.resendTimes = 1;
      }

      if (t.resendTimes < 3) {
        resendPool[i].resendTimes = resendPool[i].resendTimes + 1;
      }
    } else {
      resendPool.push({
        shipref: currentOrder.shipref,
        resendTimes: 1,
        resendDate: new Date().getTime(),
        type,
      });
    }
    i = resendPool.findIndex(
      (i) => i.shipref == currentOrder.shipref && i.type == type
    );
    strapi.log.info(resendPool[i].resendTimes);
    return resendPool[i].resendTimes;
  },
};
