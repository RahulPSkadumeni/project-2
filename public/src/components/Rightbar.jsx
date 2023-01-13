import React from 'react'
import FriendsCard from './friendsCard/FriendsCard'
import FriendsRequestCard from './friendsRequestCard/FriendsRequestCard'
import "./Rightbar.css"
const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
          <b>Amal </b> and <b>3 other friends</b> have a birhday today. </span>

         
          
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>

        {/* <ul className="rightbarFriendList">
          
        
        
        <li className="rigthBarFriend">
          <div className="rightBarProfileImageContainer">
            <img  className='rightbarprofileImage' src="https://wallpapers.com/images/featured-full/cool-profile-pictures-4co57dtwk64fb7lv.jpg" alt="" />
            <span className='rigbtbarOnline'></span>
            
          </div>
          <div className='rigthBarFriendCardData'>

          <span className='rigbtbarUsername'> Yadhu Yadhu</span>

          <span className='lastSeen' >45 min ago</span>
          </div>
        </li>

        
        <li className="rigthBarFriend">
          <div className="rightBarProfileImageContainer">
            <img  className='rightbarprofileImage' src="https://wallpapers.com/images/featured-full/cool-profile-pictures-4co57dtwk64fb7lv.jpg" alt="" />
            <span className='rigbtbarOnline'></span>
            
          </div>
          <div className='rigthBarFriendCardData'>

          <span className='rigbtbarUsername'> Yadhu Yadhu</span>

          <span className='lastSeen' >45 min ago</span>
          </div>
        </li>



        <li className="rigthBarFriend">
          <div className="rightBarProfileImageContainer">
            <img  className='rightbarprofileImage' src="https://wallpapers.com/images/featured-full/cool-profile-pictures-4co57dtwk64fb7lv.jpg" alt="" />
            <span className='rigbtbarOnline'></span>
            
          </div>
          <div className='rigthBarFriendCardData'>

          <span className='rigbtbarUsername'> Yadhu Yadhu</span>

          <span className='lastSeen' >45 min ago</span>
          </div>
        </li>

        </ul> */}
        <FriendsCard className="rightbarFriendList" />

        <h4 className="rightbarTitle"> Friends Request</h4>

<FriendsRequestCard className="rightbarFriendList" />
       </div>

  )
}

export default Rightbar