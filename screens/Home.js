import React, {Component} from 'react';
import {View, Text, FlatList, Button, Switch, StyleSheet} from 'react-native'
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies : [],
            page:1
        };
    }


    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies(){
        fetch(process.env.API_URL+'/companies?page='+this.state.page)
            .then(response => response.json())
            .then(companies => this.setState({ // ajoute les companies en chargeant page/page
                companies: [...this.state.companies,...companies]
            }))
    };

    addFilm(){
        const movie = {title:this.state.title, year:this.state.year};
        this.setState({
            movies:[...this.state.movies,movie]
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Accueil</Text>
                <FlatList
                    data={this.state.companies}
                    renderItem={({item}) => <CompanieItem companie={item}/>}
                    keyExtractor={(item,index) => index.toString()}
                />
                <Button
                    onPress={() => this.setState({page : this.state.page +1},
                        ()=> this.fetchCompanies())}
                    title={'Charger la suite'}/>
                <TextInput value={this.state.title} placeholder={'Ajouter le titre du film'}
                    onChangeText={text => this.setState({title:text})}
                />
                <Switch/>
                <TextInput value={this.state.year} keyborardType='numeric'
                    onChangeText={text => this.setState({year:text})}
                />
                <Button
                    title="Ajouter un film"
                    color="#000"
                    onPress={() => this.addFilm()} // fonction fléchée pour garder le contexte
                />
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


export default Home;