import React from 'react';
import Home from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/build';
import Add from 'material-ui/svg-icons/content/add';


const Menus = {
  sideMenu: [
    { text: 'View Current Trip', icon: <Home />, link: '/home'},
    { text: 'Plan Another Trip', icon: <Add />, link: '/home'},
    { text: 'Manage Account', icon: <Settings />, link: '/home'},
  ]
}

export default Menus;