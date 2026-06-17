"use client";

import { currencyFormatter } from "@/app/helpers/currencyFormatter";
import React, { useState } from "react";
import { BidsForm } from "./BidsForm";
import { addBid } from "@/app/actions";

export const Bids = ({ bids, houseId }) => {
  const [bidItems, setBidItems] = useState(bids);
  const submitBid = async (bid) => {
    const newBid = await addBid(bid);

    setBidItems([...bidItems, newBid]);
  };

  return (
    <>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th>Bidder</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {bidItems.map((b) => (
            <tr key={b.id}>
              <td>{b.bidder}</td>
              <td>{currencyFormatter.format(b.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BidsForm submitBid={submitBid} houseId={houseId} />
    </>
  );
};
