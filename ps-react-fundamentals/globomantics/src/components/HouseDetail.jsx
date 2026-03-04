import { useLocation } from 'react-router';
import { currencyFormatter } from '../helpers/currencyFormatter';
import defaultPhoto from '../helpers/defaultPhoto';

export const HouseDetail = () => {
  const location = useLocation();
  const { house } = location.state;

  const getImageUrl = (name) => {
    return `/src/assets/${name}`;
  };

  console.log(house.address);

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              house.photo ? getImageUrl(`${house.photo}.jpeg`) : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
      </div>
    </div>
  );
};
