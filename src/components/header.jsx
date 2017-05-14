import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {logoSmall} from './assets';

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

const HeaderWaves =
  <div style={{position: 'absolute', top: '64px', width: '100%', overflow: 'hidden'}}>
    <svg className='headerwaves' width='1500' style={{}}>
      <path d="M0,-10 C200,100 250,0 500,0 S750,80 850,-10 Z" style={{stroke: 'none', fill: '#FF0055'}}/>
    </svg>
  </div>

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="tophdr">
        <AppBar 
          style={styleHeader}
          title={<div style={styleHeaderTitle}>{logoSmall}</div>}
          onLeftIconButtonTouchTap={() => {}}
        />
        {HeaderWaves}
      </div>
    )
  }
}

export default Header;
