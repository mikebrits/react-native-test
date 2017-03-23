import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react/native';
import BasePostPage from './BasePostPage'

@observer
class HomePage extends BasePostPage {

    render(){
        return (
            <View>
                {super.render()}
            </View>
        )

    }
}

const styles = StyleSheet.create({});

export default HomePage;