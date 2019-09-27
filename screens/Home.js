import React, {Component} from 'react';
import {View, Text, FlatList, Button, Switch, StyleSheet} from 'react-native'
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies : [],
            page:1,
            bool:false
        };
    }


    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies(){
        fetch(process.env.API_URL+'/companies?page='+this.state.page)
            .then(response => response.json())
            .then(data => this.setState({ // ajoute les companies en chargeant page/page
                companies: [...this.state.companies,...data.companies]
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
            <View style={styles.main_container}>
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
                <Switch value={this.state.bool} onValueChange={bool=>this.setState({bool:bool})}/>
                <TextInput value={this.state.year} keyborardType='numeric'
                    onChangeText={text => this.setState({year:text})}
                />
            </View>
        );
    }
}

 /*<Button
     title="Ajouter un film"
     color="#000"
     onPress={() => this.addFilm()} // fonction fléchée pour garder le contexte
   />*/


const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
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