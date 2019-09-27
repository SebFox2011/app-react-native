import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Accelerometer} from "expo-sensors";

import SensorItem from "../../components/SensorItem";

class Accelerometre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accelerometerData: {}, // déclaré comme objet (clé, valeur)
        }
    }

    componentDidMount() {
        Accelerometer.setUpdateInterval(100);
        this.accelerometerSubscription = Accelerometer.addListener(
            data => this.setState({accelerometerData:data}));
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Accelerometre;