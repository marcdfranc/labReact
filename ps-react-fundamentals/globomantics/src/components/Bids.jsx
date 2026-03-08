import React from 'react';
import { currencyFormatter } from '../helpers/currencyFormatter';
import { BidsForm } from './BidsForm';

export const Bids = ({ bids }) => {
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
          {bids.map((b) => (
            <tr key={b.id}>
              <td>{b.bidder}</td>
              <td>{currencyFormatter.format(b.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
