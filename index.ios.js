/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import { NativeRouter, Route, Link } from 'react-router-native'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import Header from './src/components/Header';
import HomePage from './src/components/HomePage';
import Subreddit from './src/components/Subreddit';
import {Reddit} from './src/utils/API/RedditAPI';


@observer
class NativeTest extends Component {

    @observable posts = [];

    componentWillMount() {

        Reddit.getHot().then(
            val => {
                this.posts = val.data.children;
            },
            error => {
                this.error = error;
            }
        )
    }

    _onDragEvent() {
        // This callback will be called when the user enters signature
        console.log("dragged");
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Super React App"/>
                <NativeRouter>
                    <View>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/r/:subreddit" component={Subreddit}/>
                    </View>
                </NativeRouter>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        backgroundColor: '#eaeaea',
    }
});

export default NativeTest;

AppRegistry.registerComponent('NativeTest', () => NativeTest);
