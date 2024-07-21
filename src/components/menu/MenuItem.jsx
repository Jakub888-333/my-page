import React, {} from 'react'
import "./css/menuItem.css"

const MenuItem = ({label, isActive, onClick}) => {
  return (
    <div className={isActive ? 'navbarMenuItem active' : 'navbarMenuItem'} onClick={onClick}>
        <div>{label}</div>
    </div>
)
}

export default MenuItem