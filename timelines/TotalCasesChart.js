import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { Divider, Text } from "react-native-elements";

import {
    LineChart,
} from 'react-native-chart-kit';

export default function TotalCasesChart(props) {
    return (
        <View style={{
            alignItems: 'center',

        }}>
            <Text h4> Total Corona Cases  </Text>
            <Divider />

            <LineChart
                data={{
                    labels: props.dates,
                    datasets: [
                        {
                            data: props.cases
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16} // from react-native
                height={220}

                withInnerLines={false}
                chartConfig={{
                    backgroundColor: '#ffffff',

                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,

                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />

        </View>

    );
}