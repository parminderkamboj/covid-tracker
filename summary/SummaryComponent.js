import * as React from "react";
import { Platform, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements'
export default function SummaryComponent(props) {
    return (
        <View  >
            <Card containerStyle={styles.blackCard} title='Total Confirmed' titleStyle={styles.blackCardText}>
                <Text h2 style={styles.confirmedText}>{props.summary && props.summary.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
            <Card containerStyle={styles.blackCard} title='Total Deaths' titleStyle={styles.deathText}>
                <Text h2 style={styles.deathText}>{props.summary && props.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
            <Card containerStyle={styles.blackCard} title='Recovered' titleStyle={styles.regionText}>
                <Text h2 style={styles.regionText}>{props.summary && props.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({

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

