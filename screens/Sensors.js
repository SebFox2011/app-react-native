import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Accelerometer} from "expo-sensors";

class Sensors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccelerometerData: {} // déclaré comme objet (clé, valeur)
        }
    }

    componentDidMount() {
        this.accelerometerSubscription = Accelerometer.addListener(
            data => this.setState({AccelerometerData:data}));
    }

    componentWillUnmount() {
        /* if(this.accelerometerSubscription) {this.accelerometerSubscription.remove()}*/
        this.accelerometerSubscription && this.accelerometerSubscription.remove();
        this.AccelerometerData = null;
    }

    render() {
        const {x,y,z} = this.state.AccelerometerData; //{x:1,y:3,a:2}
        return (
            <View>
                <Text>X: {x}</Text>
                <Text>X: {y}</Text>
                <Text>X: {z}</Text>
            </View>
        );
    }
}

export default Sensors;