"use client";

import { useActionState, useRef, useState } from "react";
import { useTimeMessage } from "@/app/hooks/useTimeMessage";

export const BidsForm = ({ submitBid, houseId }) => {
  const formRef = useRef(null);
  const [lastValues, setLastValues] = useState({ bidder: "", amount: "" });
  const { message, showMessage } = useTimeMessage();

  const submitFormAction = async (previousState, formData) => {
    const bidder = formData.get("bidder");
    const amount = formData.get("amount");
    try {
      await submitBid({
        houseIdStr: houseId,
        bidder: bidder,
        amount: amount,
      });

      if (formRef) {
        formRef.current.reset();
        setLastValues({ bidder: "", amount: "" }); // Limpa o estado
      }

      showMessage("bid saved with success", "success");

      return { success: true };
    } catch (error) {
      console.log(error);
      showMessage("error on save bid", "danger");
      // Mantém os valores para o próximo render
      setLastValues({ bidder, amount });
      return { success: false };
    }
  };

  const [state, formAction, isPending] = useActionState(submitFormAction, {});

  return (
    <form ref={formRef} action={formAction}>
      <div className="d-flex flex-row gap-3 m-0 mt-3">
        <div className="flex-fill ">
          <label htmlFor="bidder" className="form-label">
            Bidder
          </label>
          <input
            type="text"
            required
            autoComplete="off"
            className="form-control"
            name="bidder"
            id="bidder"
            placeholder="Bidder"
            disabled={isPending} // Desabilita durante loading
            defaultValue={lastValues.bidder}
          />
        </div>
        <div>
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            required
            autoComplete="off"
            className="form-control"
            placeholder="0"
            name="amount"
            id="amount"
            disabled={isPending}
            defaultValue={lastValues.amount}
          />
        </div>
        <div className="d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? "Adicionando..." : "Add"}
          </button>
        </div>
      </div>

      {message.visible && (
        <div className={`alert alert-${message.type} mt-2`}>{message.text}</div>
      )}
    </form>
  );
};
