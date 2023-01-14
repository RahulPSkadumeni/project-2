import React from 'react'
import "./sidebar.css"
// import {HomeSharp,NotificationsNoneSharp,ForwardToInboxSharp,VideoLibrarySharp,PeopleSharp}  from "@mui/icons-material"
const Sidebar = () => {
  return (
    <div className='sideBar'>
      Explore
      <div className="sidbarWrap">
        <ul className='sidebarList'>
          <li className='SidebarListItem' >
            {/* <HomeSharp className='SidebarIcon'/> */}
            <span className='SidebarListItemText'>Home</span>
          </li>
          <li className='SidebarListItem'>
            {/* <NotificationsNoneSharp className='SidebarIcon'/> */}
            <span className='SidebarListItemText'>Notifications</span>
          </li>
          <li className='SidebarListItem'>
            {/* <ForwardToInboxSharp className='SidebarIcon'/> */}
            <span className='SidebarListItemText'>Inbox</span>
          </li>
          <li className='SidebarListItem'>
            {/* <PeopleSharp className='SidebarIcon'/> */}
            <span className='SidebarListItemText'>Community</span>
          </li><li className='SidebarListItem'>
            {/* <VideoLibrarySharp className='SidebarIcon'/> */}
            <span className='SidebarListItemText'>Video</span>
          </li>
          



        </ul>

      </div>

    </div>
  )
}

export default Sidebar