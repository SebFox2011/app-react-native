import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

class Gps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null
        }
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

export default Gps;