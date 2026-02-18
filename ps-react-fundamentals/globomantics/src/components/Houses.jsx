import React, { useEffect, useRef, useState } from 'react'
import { HouseList } from './HouseList';
import { AddHouseButton } from './AddHouseButton';

export const Houses = ({selectHouse}) => {
  
    const [houses, setHouses] = useState([]);    
    const [loading, setLoading] = useState(true)
    const counter = useRef(0)

    const addHouse = (house) => { 
        setHouses([...houses, house])
    }
    
        useEffect(() => {
            const fetchHouses = async () => {
                try {
                    const response = await fetch("http://localhost:4000/houses")
                    const houses = await response.json()
                    setHouses(houses)                
                } catch (error) {
                    console.error("error on fetch houses:", error)
                } finally {
                    setLoading(false)
                }
            }
    
            fetchHouses()
            counter.current++
            console.log(counter.current)
        }, [])
    
        if (loading) {
            return <div>Loading...</div>
        } 
    
      return (
        <>
            <div className="row mb-2">
                <h5 className='themeFontColor text-center'>
                    Houses currently on the market
                </h5>
            </div>    
           <HouseList houses={houses} selectHouse={selectHouse} />
           <AddHouseButton callBack={addHouse} />
        </>
  )
}
