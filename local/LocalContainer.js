import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native';

import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import LocalComponent from "./LocalComponent";
import { getLocalData } from './localDataReducer';

class LocalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }
  componentDidMount() {
    //this.props.getAll();
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.getLocalData(position.coords.latitude, position.coords.longitude);
      },
      error => console.log(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }

    );
  }
  render() {
    let comp = <ActivityIndicator size="large" color="#0000ff" />;
    if (!this.props.loading) {
      comp = <LocalComponent localData={this.props.localData} />
    }
    return (
      <ScrollView style={{ align: "center" }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {comp
        }
      </ScrollView>
    );
  }
}



const mapStateToProps = state => {
  return {
    localData: state.LocalDataReducer.localData,
    loading: state.LocalDataReducer.loading,
  };
};

const mapDispatchToProps = {
  getLocalData
};


export default connect(mapStateToProps, mapDispatchToProps)(LocalContainer);