import React from 'react'
import { currencyFormatter } from '../helpers/currencyFormatter'

export const HouseRow = ({house}) => {
  return (
     <tr >
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  )
}
