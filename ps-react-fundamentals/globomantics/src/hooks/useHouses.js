import { useEffect, useState } from 'react';
import { loadingStatus } from '../helpers/loadingStatus';

export const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(loadingStatus.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(loadingStatus.isLoading);
      try {
        const response = await fetch('http://localhost:4000/houses');
        const houses = await response.json();
        setHouses(houses);
        setLoading(loadingStatus.loaded);
      } catch (error) {
        setLoading(loadingStatus.hasErrored);
        console.error('error on fetch houses:', error);
      }
    };

    fetchHouses();
  }, []);

  return { houses, setHouses, loading, setLoading };
};
