import { currencyFormatter } from '../helpers/currencyFormatter';
import defaultPhoto from '../helpers/defaultPhoto';
import { Bids } from './Bids';
import { useSingleHouse } from '../hooks/useSingleHouse';
import { BidsForm } from './BidsForm';
import { LoadingIndicator } from './LoadingIndicator';

export const HouseDetail = () => {
  const { house, addBid, bid, setBid } = useSingleHouse();

  const getImageUrl = (name) => {
    return `/src/assets/${name}`;
  };

  if (!house) return <LoadingIndicator loadingState="Loading..." />;

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
        <div className="row">
          <Bids bids={house.bids} />
          <BidsForm addBid={addBid} bid={bid} setBid={setBid} />
        </div>
      </div>
    </div>
  );
};
