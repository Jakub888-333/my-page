import React, {} from 'react'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const MenuIcon = ({onClick, fontSize}) => {
  return (
    <div className="menu-icon" onClick={onClick}>
        <MenuTwoToneIcon fontSize={fontSize}/>
    </div>
)
}

export default MenuIcon