import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class CameraComponent extends Component {

    componentWillMount(){
        Actions.refresh({
            renderRightButton: () => (
                <TouchableHighlight onPress={() => {
                    this.props.onSave(this.props.image);
                    //Actions.pop({popNum : 2});
                }}>
                    <Text>Save</Text>
                </TouchableHighlight>),
            title: "Title Test"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri : this.props.image}}
                    style={{width: '100%', height: '100%'}}
                />
            </View>
        );
    }
}

export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});