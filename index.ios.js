/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';


import Index from './src/Index';

class NativeTest extends Component {

    render() {
        return  <Index/>;
    }
}

export default NativeTest;

AppRegistry.registerComponent('NativeTest', () => NativeTest);
