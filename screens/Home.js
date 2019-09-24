import React, {Component} from 'react';
import {View,Text,FlatList,Button} from 'react-native'
import MovieItem from "../components/MovieItem";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : []
        };
    }

    componentDidMount() {
        this.setState({
            movies: [
                {title:'Titanic',year: 1988},
                {title:'Intouchables',year: 2015},
                {title:'StarWars',year: 1970},
                {title:'StarTrek',year: 1975}

            ]
        })
    }
    addFilm(){
        const movie = {title:'Terminator 6', year:2019};
        this.setState({
            movies:[...this.state.movies,movie]
        });
    }

    render() {
        return (
            <View>
                <Text>Home</Text>

                <FlatList
                    data={this.state.movies}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                    keyExtractor={(item,index) => index.toString()}
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

export default Home;