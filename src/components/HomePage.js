import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react/native';
import BasePage from './BasePage'

@observer
class HomePage extends BasePage {

    render(){
        return (
            <View>
                <Text>Home</Text>
                {super.render()}
            </View>
        )

    }
}

const styles = StyleSheet.create({});

export default HomePage;