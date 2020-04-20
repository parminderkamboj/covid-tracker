import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

//import { getSummary } from './summaryReducer';
import { getAll } from '../BingReducer'
import SummaryComponent from './SummaryComponent';
class SummaryContainer extends React.Component {

  // navigator.geolocation.getCurrentPosition(
  //   position => {
  //     const location = JSON.stringify(position);

  //     console.log("location " + JSON.stringify(location));
  //   },
  //   error => console.log(error.message),
  //   { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }

  // );
  // constructor() {
  //   super();
  //   this.state = {
  //     statistics: {}
  //   }
  // }
  componentDidMount() {
    this.props.getAll();
  }
  render() {
    const { totalConfirmed, totalDeaths, totalRecovered, totalConfirmedDelta } = this.props.all;
    console.log("total confirm " + totalConfirmedDelta);
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {!this.props.loading &&
          <SummaryComponent confirmed={totalConfirmed} deaths={totalDeaths}
            recovered={totalRecovered}
            newCases={totalConfirmedDelta}
          />}
      </View>
    );
  }
}
const myHeader = <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>;
SummaryContainer.navigationOptions = {
  header: myHeader,
};





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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);