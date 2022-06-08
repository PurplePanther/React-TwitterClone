import React from 'react';
import './SidebarOption.css';

function SidebarOption({text, Icon}){ //Capital I because Icon is component
  return (
    <div className="sidebarOption">
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption;