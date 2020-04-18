import * as React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Divider, Text } from "react-native-elements";
import TotalCasesChart from './TotalCasesChart';
import TotalDeathsChart from './TotalDeathsChart';

import { getTimeSeries } from './timelineReducer'

class TimelineContainer extends React.Component {
    componentDidMount() {
        this.props.getTimeSeries();
    }
    render() {
        let newDates = [];
        let newCases = [];

        if (this.props.timeSeries && this.props.timeSeries[0]) {
            let timeSeries = this.props.timeSeries[0].timeseries;

            for (k in timeSeries) {
                newDates.push(k);
                newCases.push(timeSeries[k].confirmed);
            }
            newDates = newDates.slice(Math.max(newDates.length - 10, 1));
            newCases = newCases.slice(Math.max(newCases.length - 10, 1));

        }
        return (
            <ScrollView>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                {(newDates.length > 0) &&
                    <TotalCasesChart dates={newDates} cases={newCases} />}
                <Divider />
                {(newDates.length > 0) &&
                    <TotalDeathsChart dates={newDates} cases={newCases} />}

            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    let newTimeSeries = state.timelineReducer.timeSeries;
    return {
        timeSeries: newTimeSeries
    };
};

const mapDispatchToProps = {
    getTimeSeries
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);