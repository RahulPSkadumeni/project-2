import React from 'react'
import Feed from '../Feed'

import Rightbar from '../Rightbar'
import Sidebar from '../Sidebar'
import "./BodyComponent.css"


const BodyComponent = () => {
  return (
    <div className='homeContainer'>
       <Sidebar/>
       <Feed/>
       <Rightbar/>
       </div>
  )
}

export default BodyComponent