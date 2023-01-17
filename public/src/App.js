import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Admin from './pages/admin/Admin'
import GroupPages from './pages/GroupPages/GroupPages'
import GroupPage from './pages/Groups/GroupPage'

import Home from './pages/Home/Home'
import Login from './pages/Login'
import Notification from './pages/Notification/Notifications'
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
     <Route exact path="/notification" element={<Notification/>}/>
     <Route exact path="/Group" element={<GroupPage/>}/>
     <Route exact path="/Groups" element={<GroupPages/>}/>

     <Route exact path="/admin" element={<Admin/>}/>
       
       
     </Routes>
     </BrowserRouter>

  )
}

export default App