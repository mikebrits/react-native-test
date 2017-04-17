import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';


class GalleryImage extends Component {

    render() {
        const {image} = this.props;
        return (
            <TouchableOpacity
                onPress={() => Actions['imagePreview']({image : image})}
                style={styles.galleryImageWrapper}
            >
                <Image source={{uri: image.path}}
                       style={styles.galleryImage}

                />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    galleryImageWrapper: {
        width: '29%',
        aspectRatio: 1,
        margin: 8,
        backgroundColor : '#dddddd'
    },
    galleryImage : {
        width : '100%',
        aspectRatio: 1

    }

});

export default GalleryImage;