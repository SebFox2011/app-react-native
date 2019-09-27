import React, {Component} from 'react';
import {View, FlatList,Button,Image} from "react-native";
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../assets/icon1.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

class Search extends Component {
    static navigationOptions = {
        title: 'Rechercher une entreprise',
        headerTitleStyle:{
            backgroundColor: '#f4511e',
            headerTintColor: '#f0f',
            fontWeight: 'bold',
            textAlign:'left'
        },
        //headerTitle: <Image source={require('../assets/icon1.png')} style={{ width: 50, height: 50 }}/>
    };

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            companies: [],
            page:1
        };
    }

    searchChangeText(text) {
        fetch(process.env.API_URL + '/companies?search=' + text)
            .then(response => response.json())
            .then(companies => this.setState({companies: companies}));
        this.setState({result: text})
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.result} placeholder={'Entreprise à rechercher'}
                           onChangeText={text => this.searchChangeText(text)}/>
                <View style={{height:250}}>
                    <FlatList
                        data={this.state.companies}
                        renderItem={({item}) => <CompanieItem companie={item}
                              onClick={() => this.props.navigation.navigate('Company', {company:item})}/>}
                        keyExtractor={(item, index) => index.toString()}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Button title='<'/>
                    <Button title='>'/>
                </View>
            </View>
        );
    }
}

export default Search;