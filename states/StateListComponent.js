import * as React from 'react';
import { View } from 'react-native';
import { Header, ListItem, SearchBar, Text } from 'react-native-elements';
import { ScrollView } from 'react-native';
export default class StateListComponent extends React.Component {
    state = {
        searchStr: '',
        orgList: this.props.stateData,
        list: this.props.stateData,
    }

    updateSearch = (search) => {
        let newList = this.state.orgList.filter((item) =>

            (item != null) && (item.state.toLowerCase().indexOf(search.toLowerCase()) != -1)
        )
        this.setState({
            searchStr: search,
            list: newList
        });
    }
    render() {
        let listItems = this.state.list.map((item, i) => (
            <ListItem
                key={i}
                title={item.state}
                rightElement={
                    <View>
                        <Text> {'Cases : ' + item.confirmed}</Text>
                        <Text style={{ color: 'red' }}>{'Deaths : ' + item.deaths}</Text>
                    </View>
                }
                bottomDivider
            />
        ))
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