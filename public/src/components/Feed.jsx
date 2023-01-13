import React from 'react'
import "./Feed.css"
import Logo2 from './Logo/Logo2'
import Post from './Post/Post'
import Share from './share/Share' 
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
       

      </div>
    </div>
  )
}

export default Feed