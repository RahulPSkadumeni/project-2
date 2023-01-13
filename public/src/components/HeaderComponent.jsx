import React from 'react'
import Logo from './Logo/Logo'
import "./HeaderComponent.css"

import {SettingsSharp} from "@mui/icons-material"
import {ChatBubbleOutlineSharp} from '@mui/icons-material';
import {NotificationAddSharp} from "@mui/icons-material"
import {LogoutSharp} from "@mui/icons-material"
import {Search} from "@mui/icons-material"
const HeaderComponent = () => {
  return (
    <div className='header'>
   <div className='topbarleft'>
   <Logo/>
    </div>    
<div className='topbarCenter'>
    <div className='searchbar'>
    <Search className='searchIcon'/>
    <input type="text"  placeholder='Search for post,friends, any videos...' className="searchInput" />
</div>
</div>

       <div className='topbarRight'>
            {/*  <ul className='topbarIcon'>
                <li><SettingsSharp/></li>
                <li>1<ChatBubbleOutlineSharp/></li>
                <li>2<NotificationAddSharp/></li>
                <li><LogoutSharp/></li>
            </ul> */}
             <div className="topbarIcons">
          <div className="topbarIconItem">
            <SettingsSharp />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubbleOutlineSharp />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationAddSharp />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <LogoutSharp />
            <span className=""></span>
          </div>
        </div>

        </div>
    </div>
  )
}

export default HeaderComponent