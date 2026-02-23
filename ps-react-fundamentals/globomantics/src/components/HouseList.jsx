import React from 'react';
import { HouseRow } from './HouseRow';
import ErrorBoundary from './ErrorBoundary';

export const HouseList = ({ houses, selectHouse }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          <ErrorBoundary fallback="Error loading house rows!">
            {houses.map((h) => (
              <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
    </>
  );
};
