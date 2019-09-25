import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native'
import Constants from "expo-constants/src/Constants";

class CompanieItem extends Component {
    render() {
        let button = null;
        if (this.props.onClick)
            button = <Button onPress={() => this.props.onClick()} title={'voir plus'} />
        return (
            <View style={styles.container}>
                <Text>{this.props.companie.twitter_username+' '+this.props.companie.name}</Text>
                {button}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex: 1,
        backgroundColor: '#ffcf78',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'red'
    }
});
export default CompanieItem;