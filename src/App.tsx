import { useState } from 'react'
import './App.css'
import { getPosition, reverseGeocode } from './getPosition/getPosition'

function App() {


  const [message, setMessage] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  const lat = 57.700735, lon = 11.9551032

  return (

    <div className='vertical-layout'>

      <header>
        <h1>Geolocation / JensenMaps</h1>
      </header>

      <main>
        <button onClick={ () => getPosition(setMessage) }>Get Location!</button>
        <p>{message}</p>

        <button onClick={ () => reverseGeocode(lat, lon, setAddress)}>Get City!</button>
        <p>{address}</p>

      </main>

    </div>

  )
}

export default App
