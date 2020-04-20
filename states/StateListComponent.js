import * as React from 'react';
import { View } from 'react-native';
import { Header, ListItem, SearchBar, Text } from 'react-native-elements';
import { ScrollView } from 'react-native';
export default class StateListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: '',
            orgList: this.props.stateData,
            list: this.props.stateData,
        }
    }
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
    render() {

        // let searchText = props.searchText;
        // if (searchText && searchText != "") {
        //     stateData = statesData.filter(state => state.displayName.includes(searchText))
        // }
        let listItems = [];
        if (this.state.list) {
            listItems = this.state.list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.displayName}

                    rightElement={
                        <View>
                            <Text> {'Cases : ' + item.totalConfirmed}</Text>
                            <Text style={{ color: 'red' }}>{'Deaths : ' + item.totalDeaths}</Text>

                        </View>
                    }

                    bottomDivider

                />
            ))
        }
        return (
            <View >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Corona Virus Tracker', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.searchStr}
                />
                <ScrollView >
                    <View  >
                        {listItems}

                    </View>
                </ScrollView>

            </View>
        );
    }
}