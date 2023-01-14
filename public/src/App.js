import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom"

import Home from './pages/Home/Home'
import Login from './pages/Login'
import Profilepage from './pages/Profilepage/Profilepage'
import Register from "./pages/Register"


const App = () => {
  return (
    
    <BrowserRouter> 
     <Routes>
    
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/profile" element={<Profilepage/>}/>
       
     </Routes>
     </BrowserRouter>

  )
}

export default App