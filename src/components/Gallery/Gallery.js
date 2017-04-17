import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Modal, Alert} from 'react-native';
import {realm} from '../../utils/Realm/Realm';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GalleryImage from './GalleryImage';
import {Images} from '../../models/Images';

@observer
class Gallery extends Component {

    @observable modalOpen = false;

    componentWillMount() {
        let _this = this;
        Actions.refresh({
            title: "Gallery"
        });

        // Images.clear();
    }

    render() {
        const images = realm.objects('Image');
        return (
            <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                <View style={styles.gallery}>
                    {
                        images.length ?
                            _.map(images, (image, index) => <GalleryImage key={index} image={image}/>)
                            :
                            <Text>
                                No Images here senor.
                            </Text>
                    }
                </View>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Signature"
                                       onPress={this.goToSignature}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Photo" onPress={this.goToCamera}>
                        <Icon name="ios-camera" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }

    saveToGallery = (options) => {
        //console.log("Saving!", url);
        Images.create(options);
        Actions['gallery']();
    }

    goToCamera = () => {
        Actions['camera']({onSave: this.saveToGallery})
    }

    goToSignature = () => {
        Actions['signature']({onSave: this.saveToGallery})
    }

}

const styles = StyleSheet.create({
    gallery: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        //justifyContent : 'center',
        paddingTop: 65,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default Gallery;