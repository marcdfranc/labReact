import { HouseList } from './HouseList';
import { AddHouseButton } from './AddHouseButton';
import { useHouses } from '../hooks/useHouses';
import { loadingStatus } from '../helpers/loadingStatus';
import { LoadingIndicator } from './LoadingIndicator';

export const Houses = ({ selectHouse }) => {
  const { houses, setHouses, loading } = useHouses();

  const addHouse = (house) => {
    setHouses([...houses, house]);
  };

  if (loading != loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loading} />;
  }

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <HouseList houses={houses} selectHouse={selectHouse} />
      <AddHouseButton callBack={addHouse} />
    </>
  );
};
