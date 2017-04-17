import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

import Icon from 'react-native-vector-icons/Ionicons';

@observer
class CameraComponent extends Component {

    @observable imageNote = this.props.notes;
    @observable textBoxOffset = 0;
    @observable coords;


    componentWillMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                console.log('position', coords);
                this.coords = {
                    lat : coords.latitude,
                    lon : coords.longitude
                }
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        Actions.refresh({
            renderRightButton: () => (
                this.props.onSave ?
                    <TouchableOpacity onPress={() => {

                        this.props.onSave({
                            path: this.props.image,
                            notes: this.imageNote,
                            ...this.coords
                        });
                        //Actions.dismiss();
                    }}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    :
                    null
            ),
            title: "Image Preview"
        });

        Keyboard.addListener('keyboardWillShow', function (e) {
            self.keyboardWillShow(e);
        });

        Keyboard.addListener('keyboardWillHide', function (e) {
            self.keyboardWillHide(e);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: this.props.image}}
                    style={{width: '100%', height: '100%'}}
                />
                <View style={[
                    styles.textBoxWrapper,
                    {
                    padding: 16,
                    position: 'absolute',
                    bottom: this.textBoxOffset
                }]}>
                    <TextInput
                        style={styles.textBoxStyle}
                        onChangeText={(text) => {
                            this.imageNote = text
                        }}
                        value={this.imageNote}
                        placeholder="Add a Note..."
                    />
                </View>
            </View>
        );
    }

    keyboardWillShow = (e) => {
        this.textBoxOffset = e.endCoordinates.height;
    }

    keyboardWillHide = (e) => {
        this.textBoxOffset = 0
    }
}

export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textBoxWrapper: {
        padding: 16,
        position: 'absolute',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        width : '100%'
        //bottom: 0
    },
    submitButtonWrapper : {
        backgroundColor: 'transparent',
        borderRadius : 100,
        borderWidth : 1,
        borderColor : 'white'
    },
    submitButton : {
        fontSize: 35,
        height: 35,
        //borderRadius : 100,
        marginRight : 0,
        color: '#0087FF',
    },
    textBoxStyle: {
        height: 35,
        fontSize: 15,
        padding: 8,
        width: '100%',
        alignSelf : 'stretch',
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginRight : 10
    }
});