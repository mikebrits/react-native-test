import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Subreddit from './components/Subreddit';
import Camera from './components/Camera';

const Routes = (props) => (

    <Router>
        <Scene key="root">
            <Scene key="home" component={HomePage}
                   title="Super Reddit App"
                   initial
                   rightTitle="Camera"
                   onRight={() => {Actions.camera()}}
            />
            <Scene key="subreddit" component={Subreddit}/>
            <Scene key="camera" component={Camera}/>
        </Scene>
    </Router>

    // <NativeRouter>
    //     <View>
    //         <Route exact path="/" component={HomePage}/>
    //         <Route exact path="/r/:subreddit" component={Subreddit}/>
    //         <Route exact path="/camera" component={Camera}/>
    //     </View>
    // </NativeRouter>

);

const styles = StyleSheet.create({});

export default Routes;