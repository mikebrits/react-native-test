import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    CameraRoll,
    View
} from 'react-native';
import PropTypes from 'prop-types';

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
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
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
                Actions.cameraPreview({image : data.path, onSave : this.props.onSave});
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