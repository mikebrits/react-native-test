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
import {realm} from './utils/Realm/Realm';
import Routes from './Routes';

class Index extends Component {

    componentWillMount(){
        this.realm = realm;
    }

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

export default Index;

AppRegistry.registerComponent('NativeTest', () => NativeTest);
