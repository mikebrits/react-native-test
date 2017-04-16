import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import {realm} from '../../utils/Realm/Realm';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Gallery extends Component {

    componentWillMount(){
        let _this = this;
        Actions.refresh({
            renderRightButton: () => (
                <TouchableHighlight onPress={() => {Actions['camera']({onSave : _this.saveToGallery})}}>
                    <Text>Camera</Text>
                </TouchableHighlight>),
            title: "Gallery"
        });

        // realm.write(() => {
        //     let allBooks = realm.objects('Image');
        //     realm.delete(allBooks); // Deletes all books
        // })
    }
    render() {
        const images = realm.objects('Image');
        console.log("Images",images);
        return (
            <View style={styles.gallery}>
                {
                    images.length ? (
                            _.map(images, (image, index) => <Image key={index} source={{uri: image.path}} style={styles.galleryImage} />)
                    )
                    :
                    <Text>
                        No Images here senor.
                    </Text>
                }
            </View>
        )
    }

    saveToGallery = (url) => {
        console.log("Saving!", url);
        realm.write(() => {
            realm.create('Image', {path: url});
        });
        Actions['gallery']();
    }

}

const styles = StyleSheet.create({
    gallery : {
        flexWrap : 'wrap',
        flexDirection : 'row',
        //justifyContent : 'center',
        paddingTop: 65,
    },
    galleryImage : {
        aspectRatio : 1,
        width : '29%',
        margin: 8
    }
});

export default Gallery;