import React, { useState } from "react";
import { Button } from "@strapi/design-system/Button";
import ExclamationMarkCircle from "@strapi/icons/ExclamationMarkCircle";
import Refresh from "@strapi/icons/Refresh";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { Dialog, DialogBody, DialogFooter } from "@strapi/design-system/Dialog";
import { Stack } from "@strapi/design-system/Stack";
import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
} from "@strapi/design-system/Field";
import axios from "axios";
import { Badge } from "@strapi/design-system/Badge";
import { Alert } from "@strapi/design-system/Alert";
//refer:https://design-system-git-main-strapijs.vercel.app/?path=/story/design-system-components-accordion--base

const ResendButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [order, setOrder] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const CMEditViewData = useCMEditViewDataManager();
  const { layout, initialData } = CMEditViewData;

  const showModal = async () => {
    console.log(CMEditViewData, initialData.shipref);
    setIsVisible(true);
    setError(null);
    const order = await axios({
      method: "GET",
      url: `/api/getOrder?shipref=${initialData.shipref}`,
    });
    console.log(order);
    setOrder(order.data);
  };

  const resend = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: `/api/resendOrder`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ shipref: initialData.shipref }),
      });
      if (res.status == 200) {
        setLoading(false);
        setError("SUCCESS");
        console.log("scuuess", res);
      } else {
        setLoading(false);
        setError(res.data.message);
        console.log("fail", res);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.data.message);
    }
  };

  return (
    <>
      {layout.apiID == "log" && (
        <Button variant="secondary" startIcon={<Refresh />} onClick={showModal}>
          Resend
        </Button>
      )}
      <Dialog
        onClose={() => setIsVisible(false)}
        title="Resend Order"
        isOpen={isVisible}
      >
        <DialogBody>
          {order ? (
            <>
              <Badge active>Found a reacord which can be resent!</Badge>
              <Field name="shipref" style={{ marginTop: "30px" }}>
                <Stack spacing={1}>
                  <FieldLabel>shipref</FieldLabel>
                  <FieldInput
                    placeholder="Placeholder"
                    value={order.shipref}
                    disabled={true}
                    onChange={() => {}}
                  />
                  <FieldHint />
                  <FieldError />
                </Stack>
              </Field>

              <Field name="remarks" style={{ marginTop: "20px" }}>
                <Stack spacing={1}>
                  <FieldLabel>remarks</FieldLabel>
                  <FieldInput
                    placeholder="remarks"
                    value={order.remarks}
                    disabled={true}
                    onChange={() => {}}
                  />
                  <FieldHint />
                  <FieldError />
                </Stack>
              </Field>
            </>
          ) : (
            <Badge>Not Record!</Badge>
          )}

          {error && error != "SUCCESS" && (
            <Alert style={{ marginTop: "20px" }} variant="danger">
              {error}
            </Alert>
          )}

          {error == "SUCCESS" && (
            <Alert style={{ marginTop: "20px" }} variant="success">
              Success
            </Alert>
          )}
        </DialogBody>
        <DialogFooter
          startAction={
            <Button onClick={() => setIsVisible(false)} variant="tertiary">
              Cancel
            </Button>
          }
          endAction={
            <Button variant="success" onClick={resend} loading={loading}>
              Confirm
            </Button>
          }
        />
      </Dialog>
    </>
  );
};

export default ResendButton;
