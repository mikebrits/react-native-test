import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../../models/Images';

@observer
class ImagePreview extends Component {

    @observable detailView = false;

    render() {

        const {image} = this.props;
        console.log('Image', image);

        return (
            <TouchableWithoutFeedback
                style={{flex: 1}}
                onPress={() => {
                    this.detailView = !this.detailView
                }}
            >
                <View>
                    <Image
                        source={{uri: image.path}}
                        style={{width: '100%', height: '100%'}}
                    />
                    <View style={[styles.details, {opacity: this.detailView ? 1 : 0}]}>
                        {
                            image.notes &&
                            <Text style={styles.notes}>
                                {image.notes}
                            </Text>
                        }
                        <View style={styles.tools}>
                            {
                                image.lat &&
                                <TouchableWithoutFeedback onPress={this.goToMap}>
                                    <Icon name="ios-map-outline" style={styles.toolButton}/>
                                </TouchableWithoutFeedback>
                            }

                            <TouchableWithoutFeedback onPress={this.confirmDelete}>
                                <Icon name="ios-trash-outline" style={styles.toolButton}/>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    goToMap = () => {
        Actions['singleMarkerMap']({lat : this.props.image.lat, lon : this.props.image.lon});
    }

    confirmDelete = () => {
        Alert.alert('Are you sure you want to delete this image?',
            'This cannot be undone',
            [
                {
                    text : 'Delete',
                    onPress : this.deleteImage
                },
                {
                    text : 'Cancel'
                }
            ]
        )
    }

    deleteImage = () => {
        Images.delete(this.props.image.id);
        Actions['gallery']();
    }

}

ImagePreview.propTypes = {
    image: PropTypes.shape({
        id : PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        notes: PropTypes.string
    }).isRequired
};

const styles = StyleSheet.create({
    details: {
        position: 'absolute',
        bottom: 0
    },
    notes : {
        width : '100%',
        padding : 16,
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        color : 'white'
    },
    tools : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },
    toolButton : {
        padding : 8,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        textAlign : 'center',
        fontSize : 25,
        color : '#0087FF'
    }
});

export default ImagePreview;