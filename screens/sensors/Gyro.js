import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Gyroscope } from 'expo-sensors';
import SensorItem from "../../components/SensorItem";

class Gyro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyroscopeData :{},
        }
    }

    componentDidMount() {
        Gyroscope.setUpdateInterval(100); // Mise en place de l'interval de mesure
        this.gyroscopeSubscription = Gyroscope.addListener(
            data => this.setState({gyroscopeData:data}));
    }

    componentWillUnmount() {
        this.gyroscopeSubscription && this.gyroscopeSubscription.remove();
        this.gyroscopeData = null;
    }

    render() {

        return (
            <View>
                <Text>Gyromètre</Text>
                <SensorItem data={this.state.gyroscopeData} />
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

export default Gyro;