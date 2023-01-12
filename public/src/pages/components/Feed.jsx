import React from 'react'
import "./Feed.css"
import Share from './share/Share' 
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>

      </div>
    </div>
  )
}

export default Feed