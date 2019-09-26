import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

class Contact extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>Contact</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#7e7e7e',
        fontWeight: 'bold',
        fontSize: 32,
        padding:5
    }
});


export default Contact;