import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { getSummary } from './summaryReducer';
import SummaryComponent from './SummaryComponent';
import { MyHeader } from '../app/Header'
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
    this.props.getSummary();
  }
  render() {
    const { summary } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {summary &&
          <SummaryComponent summary={summary}
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
  let storedSummary = state.summaryReducer.summary;
  return {
    summary: storedSummary
  };
};

const mapDispatchToProps = {
  getSummary
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);