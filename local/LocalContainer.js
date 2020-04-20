import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Header, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import data from '../data/timelinedata.json';
function closestLocation(targetLocation, locationData) {
  function vectorDistance(dx, dy) {
    return Math.sqrt(dx * dx + dy * dy);
  }

  function locationDistance(location1, location2) {
    var dx = location1.latitude - location2.latitude,
      dy = location1.longitude - location2.longitude;

    return vectorDistance(dx, dy);
  }

  return locationData.reduce(function (prev, curr) {
    var prevDistance = locationDistance(targetLocation, prev),
      currDistance = locationDistance(targetLocation, curr);
    return (prevDistance < currDistance) ? prev : curr;
  });
}
class locationType {
  constructur(lat, long) {
    this.latitude = lat;
    this.longitude = long;
  }
}
export default class LocalContainer extends React.Component {
  render() {
    let location = {}
    navigator.geolocation.getCurrentPosition(
      position => {
        location = JSON.stringify(position);

        console.log("location " + JSON.stringify(location));
      },
      error => console.log(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }

    );
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text h1> {location.latitude + " " + location.longitude} </Text>
      </ScrollView>
    );
  }
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
