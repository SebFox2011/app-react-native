import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Accelerometer} from "expo-sensors";
import { Gyroscope } from 'expo-sensors';
import SensorItem from "../components/SensorItem";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

class Sensors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accelerometerData: {}, // déclaré comme objet (clé, valeur)
            gyroscopeData :{},
            location: null,
            errorMessage: null
        }
    }

    componentDidMount() {
        Accelerometer.setUpdateInterval(100);
        Gyroscope.setUpdateInterval(100); // Mise en place de l'interval de mesure
        this.accelerometerSubscription = Accelerometer.addListener(
            data => this.setState({accelerometerData:data}));
        this.gyroscopeSubscription = Gyroscope.addListener(
            data => this.setState({gyroscopeData:data}));
    }

    componentWillMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        /*
        *  OU :
        * Permissions.askAsync(Permissions.LOCATION)
        *   .then(({status})=>{
        *      Location.getCurrentPositionAsync({})
        *          .then(location => this.setState({location:location}))
        *   });
        * */
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    componentWillUnmount() {
        /* if(this.accelerometerSubscription) {this.accelerometerSubscription.remove()}*/
        this.accelerometerSubscription && this.accelerometerSubscription.remove();
        this.accelerometerData = null;

        this.gyroscopeSubscription && this.gyroscopeSubscription.remove();
        this.gyroscopeData = null;
    }

    render() {
        let text = 'Waiting..';
        let location = <Text>'Waiting location ...'</Text>;
        if (this.state.location) {
            text = JSON.stringify(this.state.location);
            const {latitude,longitude,altitude,accuracy} = this.state.location.coords;
            location = (
                <View>
                    <Text>Latitude : {latitude}</Text>
                    <Text>Longitude : {longitude}</Text>
                    <Text>Altitude : {altitude}</Text>
                    <Text>Précision : {accuracy}</Text>
                </View>
            );
        }

        return (
            <View>
                <Text>Accéléromètre</Text>
                <SensorItem data={this.state.accelerometerData} />
                <Text>Gyromètre</Text>
                <SensorItem data={this.state.gyroscopeData} />
                <Text>GPS</Text>
                {location}
                <Text style={styles.paragraph}>{text}</Text>
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

export default Sensors;