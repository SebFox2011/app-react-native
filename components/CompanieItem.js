import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native'
import Constants from "expo-constants/src/Constants";

class CompanieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.companie.twitter_username+' '+this.props.companie.name}</Text>
                <Button onPress={() => this.setState({result : this.props.companie.name})}
                        title={'voir plus'} />
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