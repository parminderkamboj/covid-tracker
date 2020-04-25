import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import StateListComponent from './StateListComponent';
import { getStatesData } from './statesReducer';

//33.4484° N, 112.0740° W for phx 
class StatelistContainer extends React.Component {
    componentDidMount() {
        this.props.getStatesData();
    }
    render() {
        let comp = <ActivityIndicator size="large" color="#0000ff" />;
        if (!this.props.loading) {
            comp = <StateListComponent stateData={this.props.states}
            />
        }
        return (

            <View >
                {comp}
            </View>
        );
    };
}
const mapStateToProps = state => {
    return {
        states: state.statesReducer.states,
        loading: state.statesReducer.loading,
    };
};

const mapDispatchToProps = {
    getStatesData
};


export default connect(mapStateToProps, mapDispatchToProps)(StatelistContainer);