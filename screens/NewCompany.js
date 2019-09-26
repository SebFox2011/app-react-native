import React, {Component} from 'react';
import { View,Button} from "react-native";
import TextInput from "../kitui/TextInput";

class NewCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            category_code:'',
            number_of_employees:0,
            founded_year:0,
            total_money_raised:'',
            phone_number:'',
            email_address:'',
            homepage_url:''
        };
    }

    saveCompany(){
        fetch(process.env.API_URL+'/companies',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {name:this.state.name},
                {name:this.state.category_code},
                {name:this.state.number_of_employees},
                {name:this.state.founded_year},
                {name:this.state.total_money_raised},
                {name:this.state.phone_number},
                {name:this.state.email_address},
                {name:this.state.homepage_url},
                )
        });
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.name} onChangeText={text => this.setState({name:text})}
                    placeholder='Nom de l entreprise'/>
                <TextInput value={this.state.category_code} onChangeText={text => this.setState({category_code:text})}
                           placeholder='Catégory code'/>
                <TextInput value={this.state.number_of_employees} onChangeText={text => this.setState({number_of_employees:text})}
                           placeholder='Nombre d employés'/>
                <TextInput value={this.state.founded_year} onChangeText={text => this.setState({founded_year:text})}
                           placeholder='Année de création'/>
                <TextInput value={this.state.total_money_raised} onChangeText={text => this.setState({total_money_raised:text})}
                           placeholder='Capital'/>
                <TextInput value={this.state.phone_number} onChangeText={text => this.setState({phone_number:text})}
                           placeholder='Numéro de téléphone'/>
                <TextInput value={this.state.email_address} onChangeText={text => this.setState({email_address:text})}
                           placeholder='Adresse mail'/>
                <TextInput value={this.state.homepage_url} onChangeText={text => this.setState({homepage_url:text})}
                           placeholder='Site Web'/>
                <Button onPress={() => this.saveCompany()} title='Enregistrer'/>
            </View>
        );
    }
}

export default NewCompany;