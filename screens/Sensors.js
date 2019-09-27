import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Accelerometer} from "expo-sensors";
import { Gyroscope } from 'expo-sensors';
import SensorItem from "../components/SensorItem";

class Sensors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accelerometerData: {}, // déclaré comme objet (clé, valeur)
            gyroscopeData :{}
        }
    }

    componentDidMount() {
        this.accelerometerSubscription = Accelerometer.addListener(
            data => this.setState({accelerometerData:data}));
        this.gyroscopeSubscription = Gyroscope.addListener(
            data => this.setState({gyroscopeData:data}));
    }

    componentWillUnmount() {
        /* if(this.accelerometerSubscription) {this.accelerometerSubscription.remove()}*/
        this.accelerometerSubscription && this.accelerometerSubscription.remove();
        this.accelerometerData = null;

        this.gyroscopeSubscription && this.gyroscopeSubscription.remove();
        this.gyroscopeData = null;
    }

    render() {

        return (
            <View>
                <Text>Accéléromètre</Text>
                <SensorItem data={this.state.accelerometerData} />
                <Text>Gyromètre</Text>
                <SensorItem data={this.state.gyroscopeData} />

            </View>
        );
    }
}

export default Sensors;