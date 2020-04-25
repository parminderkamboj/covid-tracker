import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { getSummary } from './summaryReducer';
import SummaryComponent from './SummaryComponent';
class SummaryContainer extends React.Component {
  componentDidMount() {
    this.props.getSummary();
  }
  render() {
    const { confirmed = 0, deaths = 0, recovered = 0 } = this.props.summary;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {!this.props.loading &&
          <SummaryComponent confirmed={confirmed} deaths={deaths}
            recovered={recovered}

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
  return {
    summary: state.summaryReducer.summary,
    loading: state.loading,
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