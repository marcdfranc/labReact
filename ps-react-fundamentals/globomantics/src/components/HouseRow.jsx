import React from 'react';
import { currencyFormatter } from '../helpers/currencyFormatter';
import { useNavigate } from 'react-router';

export const HouseRow = ({ house }) => {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/house/${house.id}`)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};
