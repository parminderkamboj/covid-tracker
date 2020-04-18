import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from "react-native-elements";

import {
    BarChart,

} from 'react-native-chart-kit';

export default function TotalDeathsChart(props) {
    //console.log("in totaldeathcharts " + JSON.stringify(props));
    let dates = props.dates;
    let cases = props.cases;
    if (props.dailyCases) {
        //dates = props.dailyCases.map((obj) => obj.date);
        //cases = props.dailyCases.map((obj) => obj.case);
    }
    //console.log("in totaldeathcharts " + JSON.stringify(dates + "    " + cases));

    return (
        <View style={{
            alignItems: 'center',

        }}>

            <Text h4> Total Deaths in US</Text>

            <BarChart
                data={props.data}
                width={Dimensions.get("window").width}
                withInnerLines={false}
                height={220}
                data={{
                    labels: dates,
                    datasets: [
                        {
                            data: cases,
                        },
                    ],
                }}
                fromZero={true}

                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#1d79f2',
                    fillShadowGradient: 0,

                    color: (opacity = 1) => `rgba(29, 121, 242, ${opacity})`,
                    decimalPlaces: 0
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                showBarTops={true}

            />
        </View>);

}