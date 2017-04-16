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
import User from './components/User';
import Gallery from './components/Gallery/Gallery';
import Camera from './components/Camera/Camera';
import CameraPreview from './components/Camera/CameraPreview';

const Routes = (props) => (

    <Router>
        <Scene key="root">
            <Scene key="home" component={HomePage}
                   title="Reddit Test App"
                   initial
                   rightTitle="Gallery"
                   onRight={() => {Actions.gallery()}}
            />
            <Scene key="subreddit" component={Subreddit}/>
            <Scene key="user" component={User}/>
            <Scene key="camera" component={Camera} title="Take a Picture"/>
            <Scene key="cameraPreview" component={CameraPreview}/>
            <Scene key="gallery" component={Gallery}
                   rightTitle="Camera"
                   onRight={() => {Actions.camera()}}
            />

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