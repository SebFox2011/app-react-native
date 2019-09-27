import React, {Component} from 'react';
import {View, Button,Image} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class ImageP extends Component {
    constructor(props) {
        super(props);
        this.state={
            image : null
        }
    };

    pickImage(){
        ImagePicker.launchImageLibraryAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.all,
           allowsEditing:true,
           aspect:[4,3],
        })
            .then(result => {
                if (!result.cancelled){
                    this.setState({image:result.uri})
                }
            })
            .catch(err=>console.log(err));
    }

    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA_ROLL)
            .then(({status})=> console.log(status));
    }

    render() {
        return (
            <View>
                <Button title='Chercher une image' onPress={()=>this.pickImage()}/>
                <Image source={{uri:this.state.image}} style={{ width: 200, height: 200 }}/>
            </View>
        );
    }
}

export default ImageP;