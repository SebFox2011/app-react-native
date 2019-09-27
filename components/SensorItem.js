import React, {Component} from 'react';
import {View,Text} from "react-native";

class SensorItem extends Component {
    render() {
        const {x,y,z} = this.props.data;
        return (
            <View>
                <Text>X: {x}</Text>
                <Text>Y: {y}</Text>
                <Text>Z: {z}</Text>
            </View>
        );
    }
}

export default SensorItem;