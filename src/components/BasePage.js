import React, {Component} from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {Backstack} from '../utils/Navigation/Backstack';

class BasePage extends Component{

    componentWillMount(){
        this.previous = Backstack.top();
        //Backstack.add(this.props.match.url);
    }

    render(){
        return null;
    }

}


export default BasePage;