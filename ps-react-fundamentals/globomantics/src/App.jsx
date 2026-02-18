import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Houses } from './components/Houses'
import { HouseDetail } from './components/HouseDetail'

function App() {  
  const [selectedHouse, setSelectedHouse] = useState()

  return (
    <>
     <Banner>
        <div>
          Providing Houses all over the world!!
        </div>
      </Banner>
      {selectedHouse? <HouseDetail house={selectedHouse} /> : <Houses selectHouse={setSelectedHouse} /> }
    </>
  )
}

export default App
