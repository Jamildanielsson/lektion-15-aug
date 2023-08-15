import { useState } from 'react'
import './App.css'
import { getPosition } from './getPosition/getPosition'

function App() {


  const [message, setMessage] = useState<string>('')

  return (
    
    <div className='vertical-layout'>

      <header>
        <h1>Geolocation / JensenMaps</h1>
      </header>

      <main>
        <button onClick={ () => getPosition(setMessage) }>Get Location!</button>
        <p>{message}</p>
      </main>

    </div>

  )
}

export default App
