import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { getAll } from '../BingReducer';
import { connect } from 'react-redux';
import StateListComponent from './StateListComponent';
import { Text } from 'react-native-elements';


class StatelistContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            searchStr: '',
            orgList: [],
            list: []
        }
        //this.state.orgList = require('./../data/states').stateData;
    }
    //orgList = require('./../data/states').default;
    updateSearch = (search) => {
        //this.setState(search);

        let newList = this.state.orgList.filter((item) =>

            item.displayName.toLowerCase().indexOf(search.toLowerCase()) != -1
        )
        this.setState({
            searchStr: search,
            list: newList
        });
    }
    componentDidMount() {
        getAll();
    }
    render() {
        let listOfStates = [];
        if (this.props.all.areas) {
            listOfStates = this.props.all.areas[0].areas;
        }

        //console.log("inside statelins " + JSON.stringify(list));
        return (

            <View >
                <StateListComponent stateData={listOfStates}
                    searchCallBack={this.updateSearch} searchStr={this.state.searchStr} />
            </View>
        );
    };
}
const mapStateToProps = state => {
    // console.log("state   " + JSON.stringify(state));
    let all = state.BingReducer.all;
    return {
        all: all,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    getAll
};


export default connect(mapStateToProps, mapDispatchToProps)(StatelistContainer);