import React, {Component} from 'react';
import {View,Text} from "react-native";

class Company extends Component {
    render() {
        const company = this.props.navigation.getParam('company');

        return (
            <View>
                <Text>Search Compagny</Text>
            </View>
        );
    }
}

export default Company;