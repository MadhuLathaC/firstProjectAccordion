import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/accordian/Index'
import Accordion from './components/accordian/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Accordion/>
  )
}

export default App
