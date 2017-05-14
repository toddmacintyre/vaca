import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

import PictureHeader from './pictureHeader';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completeness: 50,
      background: 'img/photo-nola.jpg'
    };
  }

  render() {
    return (
      <div className="container wizard">
        <PictureHeader heightType={'medium'}/>
        <h2 className="text-center">You have saved</h2>
        <div className="content">
          <h1 className="money">$100</h1>
          <LinearProgress mode="determinate" value={this.state.completeness} />
          <p>Off to a good start! Just 3 more months to go.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;