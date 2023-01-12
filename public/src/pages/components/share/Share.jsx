import React from 'react'
import "./share.css"
import {PermMedia,Label,LocationOn,EmojiEmotions} from "@mui/icons-material"
const share = () => {
  return (
    <div className="Share">
        <div className="shareWrapeer">
            <div className="ShareTop">
             
                <img className='ShareProfilePicture' src="/assets/person/1.jpeg"  alt="" srcSet="assets/person/1.jpeg" />
                <input placeholder='whats in Your mind Rahul?' className='ShareInput'/>
            </div>
            <hr className="shareHr"/>
            <div className="ShareBottom"></div>
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOn htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>


    </div>
  )
}

export default share