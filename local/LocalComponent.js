import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
export default function LocalDataComponent(props) {
    let data = props.localData;
    return (
        <View  >
            <View style={styles.displayName}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }} > {data.combinedKey} </Text>
            </View>
            <Card containerStyle={styles.blackCard} title='Total Confirmed' titleStyle={styles.blackCardText}>
                <Text h2 style={styles.confirmedText}>{data.confirmed && data.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
            <Card containerStyle={styles.blackCard} title='Total Deaths' titleStyle={styles.deathText}>
                <Text h2 style={styles.deathText}>{data.deaths && data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>

            <Card containerStyle={styles.blackCard} title='Recovered' titleStyle={styles.regionText}>
                <Text h2 style={styles.regionText}>{data.recovered && data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    displayName: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    blackCard: {
        backgroundColor: 'black',

        alignContent: 'center',
        borderRadius: 3,


    },
    blackCardText: {
        color: 'red',
        textAlign: 'center',
    },
    deathText: {
        color: 'grey',
        textAlign: 'center',
    },
    confirmedText: {
        color: 'red',
        textAlign: 'center',
    },
    regionText: {
        color: 'green',
        textAlign: 'center',
    },

});