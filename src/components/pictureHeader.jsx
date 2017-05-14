import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {logoSmall} from './assets';

const styleHeader = {
  backgroundColor: 'transparent',
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
  <div style={{position: 'absolute', bottom: '-58px', width: '100%', overflow: 'hidden'}}>
    <svg className='headerwaves' width='1500' style={{}}>
      <path d="M0,100 C200,0 250,100 500,100 S750,20 850,100 Z" style={{stroke: 'none', fill: '#FFFFFF'}}/>
    </svg>
  </div>

class PictureHeader extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      computedStyle: {}
    };
  }

  componentDidMount () {
    this.setState({computedStyle: {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    }})
  }

  render () {
    return (
      <div className='PictureHeader' style={this.state.computedStyle}>
        <AppBar 
          style={styleHeader}
          title={<div style={styleHeaderTitle}>{logoSmall}</div>}
          onLeftIconButtonTouchTap={() => {}}
        />
        <div className='veil'/>
        {HeaderWaves}
      </div>
    )
  }
}

export default PictureHeader;