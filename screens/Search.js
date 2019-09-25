import React, {Component} from 'react';
import {View, Text, FlatList} from "react-native";
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Search extends Component {
    static navigationOptions = {
      title: 'Rechercher une entreprise'
    };

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            companies: []
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
                <Text>Search Screen</Text>
                <TextInput value={this.state.result} placeholder={'Entreprise à rechercher'}
                           onChangeText={text => this.searchChangeText(text)}
                />
                <FlatList
                    data={this.state.companies}
                    renderItem={({item}) => <CompanieItem companie={item}
                          onClick={() => this.props.navigation.navigate('Company', {company:item})}/>}
                    keyExtractor={(item, index) => index.toString()}

                />
            </View>
        );
    }
}

export default Search;