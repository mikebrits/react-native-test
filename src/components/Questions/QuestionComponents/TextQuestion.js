import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BaseQuestion from './BaseQuestion';

class TextQuestion extends BaseQuestion{

    render(){
        return (
            <View style={[this.baseStyle, {marginTop : 8, marginBottom : 8}]}>
                <Text style={styles.label}> {this.props.label} </Text>
                <TextInput
                    style={styles.textBoxStyle}
                    onChangeText={(text) => {
                        this.value = text
                    }}
                    value={this.value}
                    placeholder={this.props.placeholder}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textBoxStyle: {
        height: 35,
        fontSize: 15,
        padding: 8,
        width: '100%',
        borderColor: '#B1B1B1',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginRight : 10
    },
    label : {
        fontWeight : 'bold',
        marginBottom : 8
    }
});

export default TextQuestion;