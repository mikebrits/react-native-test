import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BaseQuestion from './BaseQuestion';

class BooleanQuestion extends BaseQuestion{

    render(){
        return (
            <View style={[this.baseStyle, {marginTop : 8, marginBottom : 8}]}>
                <Text style={styles.label}> {this.props.label} </Text>
                <View style={styles.buttonsWrapper}>

                    <TouchableOpacity
                        style={[styles.button, (this.value == this.props.positive_value) && styles.activeButton ]}
                        onPress={() => {
                            if(this.value == this.props.positive_value){
                                this.value = null;
                            }
                            else{
                                this.value = this.props.positive_value
                            }
                        }}

                    >
                        <Text style={{color: (this.value == this.props.positive_value) ? 'white' :'grey'}}>
                            { this.props.positive_value || "Yes" }
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, (this.value == this.props.negative_value) && styles.activeButton]}
                                      onPress={() => {
                                          if(this.value == this.props.negative_value){
                                              this.value = null;
                                          }
                                          else{
                                              this.value = this.props.negative_value
                                          }
                                      }}
                    >
                        <Text style={{color: (this.value == this.props.negative_value) ? 'white' : 'grey'}}>
                            { this.props.negative_value || "No" }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    buttonsWrapper : {
        flexDirection : 'row',
        justifyContent : 'center'
    },
    button: {
        padding: 8,
        margin : 8,
        width: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth : 1,
        borderColor : 'gray',
        borderRadius: 5
    },
    activeButton : {
        backgroundColor: 'blue',
    },
    label : {
        fontWeight : 'bold',
        marginBottom : 8
    }
});

export default BooleanQuestion;