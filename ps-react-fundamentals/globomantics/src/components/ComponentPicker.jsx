import React from 'react';
import navValues from '../helpers/navigation/navValues';
import { HouseList } from './HouseList';
import { HouseDetail } from './HouseDetail';

export const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <HouseDetail />;
    default:
      return (
        <h3>No componnent for navigation value {currentNavLocation} found</h3>
      );
  }
};
