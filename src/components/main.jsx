import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import {GridList, GridTile} from 'material-ui/GridList';

import PictureHeader from './pictureHeader';

import TripsData from '../../data/save-more.json';

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
  cityFont: {
    zIndex: 100000000
  },
  grid: {
    borderRadius: 0
  },
  parentImg: {
    position: "relative",
    top: 0,
    left: 0,
    borderRadius: 100
  },
  image1: {
    position: "relative",
    top: 0,
    left: 0
  },
  image2: {
    position: "absolute",
    top: 70,
    right: 10,
    color: "white"
  },
  image3: {
    position: "absolute",
    top: 20,
    right: 10,
    color: "white",
    background: "#EA4C4B",
    borderRadius: 100,
    padding: 10,
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

  tilesData = TripsData;

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
              {this.tilesData.map((tile) => (
                <GridTile
                  style={styles.grid}
                  key={key++}
                >
                  <div style={styles.parentImg}>
                    <div className="border-radius-img">
                      <img style={styles.image1} src={tile.img} />
                      <div style={styles.image2} width={150}>{tile.name}</div>
                    </div>
                      <div style={styles.image3}>{tile.cost}&cent;</div>
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
