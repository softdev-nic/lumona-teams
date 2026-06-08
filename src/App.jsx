 import React from "react"
 import Navbar from "./components/Navbar"
 import { Routes,Route, useLocation } from "react-router-dom"
 import TeamCreation from "./Pages/TeamCreation"
 import Register from "./Pages/Register"
 import TeamsHomePage from "./Pages/TeamsHomePage"
import { useState,useEffect } from "react"
import Canvas from "./components/Canvas"
 import Login from "./Pages/Login"
 import Meets from "./services/Communication/Meets"
 
  
 import Logo from "./assets/LumonaLogo1.png"
 import Sidebar from "./components/Sidebar"
 
 
 import Message from "./components/Message"
 import { useNavigate } from "react-router-dom"
import PopUp from "./components/Pop Up/PopUP"
import AcceptInvite from "./Pages/AcceptInvite"
function App() {
  const [logged,setLogged] = useState(false)
  const location = useLocation();
  const Navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setLogged(!!token)
  }, [location.pathname])
  return (
    <>
    {
      logged&&(
        <Sidebar/>
      )
    }
     <Navbar/>
     
     <Routes>
      <Route path="/" element={<TeamsHomePage/>}/>
      <Route path="/team-creation" element={<TeamCreation/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/accept-invitation/:inviteToken" element={<AcceptInvite/>}/>
      <Route path="/canvas" element={<Canvas/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/meets" element={<Meets/>}/>

      
        
      
      
      
     
      </Routes>
    
    
    </>
  )
}

export default App
