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
    height: 450,
    overflowY: 'auto',
  },
  grid: {
    borderRadius: 100
  }
};
const tilesData = () => {
  let arr = [];
  for (let t of TripsData) {
    if (t.name.indexOf("New Orleans") !== -1) {
      arr.push(t);
    }
  }
  return arr;
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

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <div className="text-center">
            <h2>We found something you might like</h2>
            <div style={styles.root}>
              <GridList
                cellHeight={180}
                style={styles.gridList}
              >
                {tilesData().map((tile) => (
                  <GridTile
                    style={styles.grid}
                    key={key++}
                    title={tile.name}
                    onTouchTap={() => {this.reroute()}}
                    subtitle={tile.time}
                  >
                    <img src={tile.img} />
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
