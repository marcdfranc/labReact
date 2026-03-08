import React, { useEffect, useState } from 'react'
import { currencyFormatter } from '../helpers/currencyFormatter'

export const AddHouseButton = ({callBack}) => {
  const [showForm, setShowForm] = useState(false)
  const [buttonEnabled, setButtonEnabled] = useState(true)
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [price, setPrice] = useState("$0")

  useEffect(() => {
    const saveHouse = async () => {
      try {        
  
       const newHouse = {
         address: address,
         country: country,
         price: Number(price.replace(/\D/g, ""))
       }
  
       const response = await fetch("http://localhost:4000/houses", {
         method: "POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(newHouse)
       })
       const savedHouse = await response.json()
       console.log(saveHouse)
       callBack(savedHouse)
     } catch (error) {
       console.error("Error saving new house", error)
     } finally {
       setButtonEnabled(true)   
       setAddress("")
       setCountry("")
       setPrice("$0")
       setShowForm(false)
     }      
    }


    if (!buttonEnabled) {
      saveHouse()
       
    }
  }, [buttonEnabled, address, callBack, country, price])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonEnabled(false)
   }

  const addHouse = () => {
    setShowForm(true)
  }

  const cancelForm = () => { 
    setShowForm(false)
  }  

  const updatePrice = (value) => {   
    console.log(value)    
    value = currencyFormatter.format( value.replace(/\D/g, ""))    
    console.log(value)    
    setPrice(value)
   }

  return (
    <>
      {showForm? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" required autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" />            
            </div>     
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text" required autoComplete='off' value={country} onChange={(e) => setCountry(e.target.value)} className="form-control" id="country" />            
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="text" required autoComplete='off' value={price} onChange={(e) => updatePrice(e.target.value)} className="form-control" id="price" />            
            </div>
            <div className="d-inline-flex gap-2">
              <button onClick={cancelForm} className="btn btn-secondary">
                  Cancel
              </button>
              <button type='submit' disabled={!buttonEnabled} className="btn btn-primary">
                  Save
              </button>
            </div>
          </form>        
        </div>
      ) : (
        <button onClick={addHouse} className="btn btn-primary">
            Add
        </button>
      )}
    </>
  )
}
