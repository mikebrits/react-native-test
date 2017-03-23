/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,

} from 'react-native';

import Routes from './src/Routes';

class NativeTest extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Routes/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#eaeaea',
    }
});

export default NativeTest;

AppRegistry.registerComponent('NativeTest', () => NativeTest);
