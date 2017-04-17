import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

class SingleMarkerMap extends Component {

    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: this.props.lat || 37.78825,
                    longitude: this.props.lon || -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={{latitude : this.props.lat, longitude : this.props.lon}}
                    title={"Your Image Location"}
                    description={this.props.notes}
                />
            </MapView>
        )
    }

}

const styles = StyleSheet.create({});

export default SingleMarkerMap;