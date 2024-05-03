import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import { useState } from 'react'

function App() {
  // const [selectedApp, setSelectedApp] = useState();
  
  return (
    <div id='navbar'>
      <Navbar/>
      <div id='app'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
