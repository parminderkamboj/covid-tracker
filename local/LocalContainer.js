import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import LocalComponent from "./LocalComponent";
import { getAll } from '../BingReducer';
import closestLocation from './localutils';

class LocalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }
  componentDidMount() {
    this.props.getAll();
    let newLocation = {}
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude + ", " + position.coords.longitude);

        let location = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }
        let states = this.props.all.areas[0].areas;
        let allLocations = [];
        for (state of states) {
          for (area of state.areas) {
            allLocations.push(area)
          }
        }
        let closest = closestLocation(location, allLocations);
        this.setState({
          location: closest,
        });

      },
      error => console.log(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }

    );
  }
  render() {

    return (
      <ScrollView style={{ align: "center" }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {this.state.location &&
          <LocalComponent localData={this.state.location} />
        }
      </ScrollView>
    );
  }
}



const mapStateToProps = state => {
  // console.log("state   " + JSON.stringify(state));
  let all = state.BingReducer.all;
  return {
    all: all,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  getAll
};


export default connect(mapStateToProps, mapDispatchToProps)(LocalContainer);