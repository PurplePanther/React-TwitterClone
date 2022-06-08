import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon />

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption text="Home"/>
        <SidebarOption text="Home"/>
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}

        <button>Tweet</button>
    </div>
  )
}

export default Sidebar;