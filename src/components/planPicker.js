/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import TripsData from '../../data/trips.json';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

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

class PlanPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  reroute () {
    this.props.history.push('/tripItinerary');
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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container wizard">
          <div className="text-center">
            <h2 className="plan-picker-hdr">We found something you might like</h2>
            <div style={styles.root} className="plan-picker-wrap">
              <GridList
                cellHeight={180}
                style={styles.gridList}
                
              >
                {this.tilesData().map((tile) => (
                  <GridTile
                    style={styles.grid}
                    key={key++}
                    onTouchTap={() => {this.reroute()}}
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
      </MuiThemeProvider>
    );
  }
}

export default PlanPicker;
