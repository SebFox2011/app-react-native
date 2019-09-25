import React, {Component} from 'react';
import {TextInput as DefaultTextInput} from 'react-native'
// Alias pour éviter qu'il y ait des doublons de classe / composants

class TextInput extends Component {
    render() {
        return (
            <DefaultTextInput style={
                {backgroundColor:'white',
                padding:10,
                margin:10,
                borderWidth:1,
                }
            } {...this.props}/>
            //...this.props permet de transférer les props du composants parent
        );
    }
}

export default TextInput;