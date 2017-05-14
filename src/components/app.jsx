import React, { Component } from 'react';
import Header from './header';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navDrawerOpen: false,
    };
  }

  handleDrawerClick() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
    console.log('hi')
  }

  handleClose() {

  }

  render() {
    return (
      <div>
      <Header 
        handleDrawerClick={this.handleDrawerClick.bind(this)}
        />
      <LeftDrawer
        navDrawerOpen={this.state.navDrawerOpen}
        handleDrawerClick={this.handleDrawerClick.bind(this)}
      />
        {this.props.children}
      </div>
    )
  }
}

export default App;