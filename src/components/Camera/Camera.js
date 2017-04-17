import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    CameraRoll,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';


class CameraComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={"fill"}
                    defaultOnFocusComponent={false}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                >
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.captureButton}>
                        <Icon name="ios-camera" style={styles.actionButtonIcon}/>
                    </TouchableOpacity>

                </Camera>
            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => {
                console.log(data);
                Actions['cameraPreview']({image : data.path, onSave : this.props.onSave});
            })
            .catch(err => console.error(err));
    }
}

CameraComponent.propTypes = {
    onSave : PropTypes.func.isRequired
};

export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // height : '100%',
        // width : '100%',
        // position : 'absolute',
        // top : 0,
        // left : 0
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
    },
    captureButton : {
        backgroundColor : 'transparent',
        borderRadius: 100,
        borderWidth : 2,
        borderColor : 'white',
        width : 65,
        height : 65,
        marginBottom: 16,
        alignItems : 'center',
        justifyContent : 'center'
    },
    actionButtonIcon: {
        fontSize: 30,
        height: 32,
        color: 'white',
    },
});