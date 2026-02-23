import React from 'react';
import { currencyFormatter } from '../helpers/currencyFormatter';

export const HouseRow = ({ house, selectHouse }) => {
  // simula um erro para testar ErrorBpundaryComponnent
  // throw new Error();
  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};
