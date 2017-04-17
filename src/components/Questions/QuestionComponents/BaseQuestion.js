import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

@observer
class BaseQuestion extends Component{

    @observable value;
    isRequired = this.props.required || false;
    isValid = !this.isRequired;

    componentWillMount(){
        this.baseStyle = StyleSheet.create({
             //Top : 8,
             //marginBottom : 8,
        });
    }

    render(){
        return null;
    }

}

export default BaseQuestion;