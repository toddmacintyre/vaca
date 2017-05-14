import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

import PictureHeader from './pictureHeader';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: 5,
      completeness: 0,
      background: 'img/photo-nola.jpg'
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(1), 25);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > this.state.goal) {
      clearTimeout(this.timer);
      this.setState({completeness: this.state.goal})
    } else {
      this.timer = setTimeout(() => this.progress(completed + 1), 25);
      this.setState({completeness: completed + 1})
    }
  }

  render() {
    return (
      <div className="container wizard pictureheader-medium">
        <PictureHeader
          heightType={'medium'} 
          backgroundImage={this.state.background}
          content={<div><h3>5 days in</h3><img className='cityLogo' src='img/city-logo-nola.png'/></div>}
          />
        <h2 className="text-center">You have saved</h2>
        <div className="content text-center">
          <h1 className="money">$10</h1>
          <LinearProgress color='#FF0055' mode="determinate" value={this.state.completeness} /><br/>
          <p>Off to a good start! Just 3 more months to go.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;