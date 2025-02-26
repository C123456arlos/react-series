import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTube from './YouTube'
function App() {
  const username = 'esteban'
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <h1>vite {2 + 2}</h1>
        <h1>vite { }</h1>
        <YouTube></YouTube>
      </>

    </>
  )
}

export default App
