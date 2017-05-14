import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Menus from '../config/menus';

const LeftDrawer = (props) => {
  let { navDrawerOpen, handleDrawerClick } = props;

  return (
    <Drawer
      docked={false}
      open={navDrawerOpen}
      onTouchTap={() => {
        console.log('hello?')
      }}
    >
      {Menus.sideMenu.map((item, index) => (
        <MenuItem
          key={`menuItem${index}`}
          primaryText={item.text}
          leftIcon={item.icon}
          containerElement={<Link to={item.link} />}
          onTouchTap={() => handleDrawerClick()}
        />
      ))}
    </Drawer>
    )
}

export default LeftDrawer;