import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from "./pages/Register"


const App = () => {
  return (
    
    <BrowserRouter> 
     <Routes>
    
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/" element={<Home/>}/>
       
     </Routes>
     </BrowserRouter>

  )
}

export default App