import React from "react";
import { currencyFormatter } from "../helpers/currencyFormatter";
import Link from "next/link";

export const HouseRow = ({ house }) => {
  return (
    <tr>
      <td>
        <Link href={`/house/${house.id}`}>{house.address}</Link>
      </td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};
