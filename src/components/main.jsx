import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import {GridList, GridTile} from 'material-ui/GridList';

import PictureHeader from './pictureHeader';

import TripsData from '../../data/trips.json';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 400,
    overflowY: 'auto',
  },
  grid: {
    borderRadius: 100
  },
  cityFont: {
    zIndex: 100000000
  },
  parentImg: {
    position: "relative",
    top: 0,
    left: 0
  },
  image1: {
    position: "relative",
    top: 0,
    left: 0
  },
  image2: {
    position: "absolute",
    top: 30,
    right: 15
  }
};

let key = 0;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savingStatus: 5,
      savingGoal: 1000,
      background: 'img/photo-nola.jpg',
      completed: false
    };
    this.completeness = 0
  }

  componentDidMount() {
    let savingStatus = parseInt(this.props.location.search.substring(this.props.location.search.indexOf('?saved=') + 7, this.props.location.search.indexOf('&')))
    let savingGoal = parseInt(this.props.location.search.slice(this.props.location.search.indexOf('&goal=') + 6))
    this.setState({savingStatus, savingGoal});

    if (savingStatus >= savingGoal) {this.setState({completed: true})}
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    let percentage = this.state.savingStatus / this.state.savingGoal * 100
    console.log(percentage)
    if (completed > percentage) {
      clearTimeout(this.timer);
      this.completeness = percentage
    } else {
      this.timer = setTimeout(() => this.progress(completed + 1), 25);
      this.completeness = completed + 1
    }
  }

  tilesData = () => {
    let arr = TripsData;
    for (let t of arr) {
      if (t.name.indexOf("New Orleans") >= 0) {
        t['textImg'] = "img/city-logo-nola.png";
      }
      else if (t.name.indexOf("Vancouver") >= 0) {
        t['textImg'] = "img/city-logo-vancouver.png";
      }
      else {
        t['textImg'] = "img/city-logo-honolulu.png";
      }
    }
    return arr;
  };

  render() {
    this.timer = setTimeout(() => this.progress(1), 25);

    var incompleteSaving =
      <div className="container pictureheader-medium">
        <PictureHeader
          heightType={'medium'} 
          backgroundImage={this.state.background}
          content={<div><h3>5 days in</h3><img className='cityLogo' src='img/city-logo-nola.png'/></div>}
          />
        <h2 className="text-center">You have saved</h2>
        <div className="content text-center">
          <h1 className="money">${this.state.savingStatus}</h1>
          <LinearProgress color='#FF0055' mode="determinate" value={this.state.savingStatus / this.state.savingGoal * 100} /><br/>
          <p>Off to a good start! Just 3 more months to go.</p>

          <h2 className="plan-picker-hdr">Save a little more for...</h2>
          <div style={styles.root} className="plan-picker-wrap">
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              {this.tilesData().map((tile) => (
                <GridTile
                  style={styles.grid}
                  key={key++}
                  title={tile.time}
                >
                  <div style={styles.parentImg}>
                    <img style={styles.image1} src={tile.img} />
                    <img style={styles.image2} src={tile.textImg} width={150} />
                  </div>
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>

    var completeSaving =
      <div className="container pictureheader-large">
        <PictureHeader
          heightType={'large'} 
          backgroundImage={this.state.background}
          content={
            <div>
              <h3>5 days in</h3>
              <img className='cityLogo' src='img/city-logo-nola.png'/>
              <h2>OMG You did it!!</h2>
              <h1 className="money">${this.state.savingStatus}</h1>
            </div>}
          />
      </div>

    return (
      <div>
        {this.state.completed ? completeSaving : incompleteSaving}
      </div>
    );
  }
}

export default MainPage;