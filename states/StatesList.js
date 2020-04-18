import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Header, ListItem, SearchBar, Text } from 'react-native-elements';
import { ScrollView } from 'react-native';


export default class Statelist extends React.Component {
    constructor() {
        super();
        this.state = {
            searchStr: '',
            list: require('../data/states.json').stateData,
            orgList: require('../data/states.json').stateData
        }
        //this.state.orgList = require('./../data/states').stateData;
    }
    //orgList = require('./../data/states').default;
    updateSearch = (search) => {
        //this.setState(search);
        if (search == null || search.trim() === '') {
            this.setState({
                searchStr: search,
                list: this.state.orgList
            });
        }
        let newList = this.state.orgList.filter((item) =>

            item.state.toLowerCase().indexOf(search.toLowerCase()) != -1
        )
        this.setState({
            searchStr: search,
            list: newList
        });
    }
    render() {
        return (

            <View style={styles.container}>
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
                        {
                            this.state.list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.state}

                                    rightElement={
                                        <View>
                                            <Text> {'Cases : ' + item.currentCases}</Text>
                                            <Text style={{ color: 'red' }}>{'Deaths : ' + item.deaths}</Text>

                                        </View>
                                    }

                                    bottomDivider

                                />
                            ))
                        }


                    </View>
                </ScrollView>

            </View>
        );
    };
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',

    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
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
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
