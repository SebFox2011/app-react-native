import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Constants from "expo-constants/src/Constants";

class MovieItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.movie.title +' ' +this.props.movie.year}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcf78',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'red'
    }
});
export default MovieItem;