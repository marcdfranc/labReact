import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const useSingleHouse = () => {
  const { id } = useParams();
  const [house, setHouse] = useState();
  const [bid, setBid] = useState({ bidder: '', amount: 0 });

  useEffect(() => {
    const fetchHouse = async (houseId) => {
      try {
        const response = await fetch(
          `http://localhost:4000/houses/${houseId}?_embed=bids`
        );
        const houseItem = await response.json();
        setHouse(houseItem);
      } catch (error) {
        setHouse(undefined);
        console.error('error on fetch houses:', error);
      }
    };
    fetchHouse(id);
  }, []);

  const addBid = async (bid) => {
    try {
      bid.houseId = Number(id);

      const response = await fetch('http://localhost:4000/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bid),
      });

      const savedBid = await response.json();

      setHouse((prevHouse) => ({
        ...prevHouse,
        bids: [...prevHouse.bids, savedBid],
      }));

      return savedBid;
    } catch (error) {
      console.log('error on add bid ', error);
      throw error;
    }
  };

  return {
    house,
    addBid,
    bid,
    setBid,
  };
};
