import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Houses } from './components/Houses';
import { HouseDetail } from './components/HouseDetail';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };

  return (
    <ErrorBoundary fallback="Something went wrong!">
      <Banner>
        <div>Providing Houses all over the world!!</div>
      </Banner>
      {selectedHouse ? (
        <HouseDetail house={selectedHouse} />
      ) : (
        <Houses selectHouse={setSelectedHouseWrapper} />
      )}
    </ErrorBoundary>
  );
}

export default App;
