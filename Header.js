import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';

export default function MyHeader(props) {
    return (
        <View>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    );
}
