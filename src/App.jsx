import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import First from './Component/First'
import New from './Component/New'
import CardGrid from './Component/CardGrid'
import Navbar from './Component/Navbar'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path ='/' element = {<First/>}/>
      <Route path ='/c' element = {<CardGrid/>}/>
      <Route path ='/g' element = {<New/>}/>
     </Routes>
    </>
  )
}

export default App
