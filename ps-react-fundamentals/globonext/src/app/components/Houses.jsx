import { HouseList } from "./HouseList";
import { AddHouseButton } from "./AddHouseButton";

export const Houses = ({ houses }) => {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <HouseList houses={houses} />
      <AddHouseButton />
    </>
  );
};
