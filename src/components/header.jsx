import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {logoSmall} from './assets'

const styleHeader = {
  backgroundColor: '#FF0055',
  boxShadow: 'none'
}

const styleHeaderTitle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '36px',
  height: '100%'
}

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar 
          style={styleHeader}
          title={<div style={styleHeaderTitle}>{logoSmall}</div>}
          onLeftIconButtonTouchTap={() => {}}
        />
      </div>
    )
  }
}

export default Header;