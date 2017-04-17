import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SignaturePad from 'react-native-signature-pad';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import { Actions } from 'react-native-router-flux';

@observer
class Signature extends Component{

    @observable signature;

    componentWillMount(){
        Actions.refresh({
            renderRightButton: () => (
                <TouchableHighlight onPress={() => {
                    if(this.signature)
                        this.props.onSave(this.signature)
                    else
                        alert('No Signature Set')
                }}>
                    <Text>Save</Text>
                </TouchableHighlight>),
        });
    }

    render = () => {
        console.log(!!this.signature);
        return (
            <View style={{flex: 1}}>
                <SignaturePad onError={this._signaturePadError}
                              onChange={this._signaturePadChange}
                              style={{flex: 1, backgroundColor: 'white'}}/>
            </View>
        )
    };

    _signaturePadError = (error) => {
        console.error(error);
    };

    _signaturePadChange = ({base64DataUrl}) => {
        this.signature = base64DataUrl;
        // console.log("Got new signature: " + base64DataUrl);
    };


}

const styles = StyleSheet.create({

});

export default Signature;