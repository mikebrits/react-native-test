import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = (props) => (
    <View style={styles.view}>
        <Text style={styles.text}>
            {props.headerText}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    view : {
        paddingTop : 15,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#3D85C7',
        height : 60
    },

    text : {
        fontSize : 15,
        color : 'white'
    }
});

export default Header;