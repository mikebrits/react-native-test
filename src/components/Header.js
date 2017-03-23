import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator
} from 'react-native';

import {Link} from 'react-router-native'
import {Backstack} from '../utils/Navigation/Backstack';

const Header = (props) => {
    console.log('Header', props);
    return (
        <Navigator.NavigationBar
            routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                { return (<Text>&lt;</Text>); },
                RightButton: (route, navigator, index, navState) =>
                { return (<Text> </Text>); },
                Title: (route, navigator, index, navState) =>
                { return (<Text>{props.headerText}</Text>); },
            }}
            style={styles.view}
        />
    )
};

const styles = StyleSheet.create({
    view: {
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#3D85C7',
        height: 60
    },

    text: {
        fontSize: 15,
        color: 'white'
    }
});

export default Header;