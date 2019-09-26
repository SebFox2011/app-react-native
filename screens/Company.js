import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Button} from "react-native";

class Company extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:0
        }
    }


   /* static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('company').name
        }
    };*/

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('company').name,
            headerRight: (<Button title="Supprimer" onPress={() => {
                const company = navigation.getParam('company');
                fetch(process.env.API_URL + '/companies/' + company._id, { method: 'delete' })
                    .then(response => response.json())
                    .then(data => navigation.navigate('Search'))
                    .catch(err => console.log(err))
                ;
            }} />)
        }
    };

    delete(id) {
        console.log(id);
        fetch(process.env.API_URL+'/companies/' + id, {
            method: 'delete'
        });
    }
    render() {
        const company = this.props.navigation.getParam('company');

        return (
            <ScrollView>
                <View>
                    <Text style={styles.text_name}>{company.name}</Text>
                    <Button onPress={(id)=>this.delete(company._id)} title='supprimer'/>
                </View>
                <View>
                    <Text style={styles.text_category}>{company.category_code}</Text>
                </View>
                <View style={styles.main_container}>
                    <View style={styles.border}>
                        <Text>Employees: {company.number_of_employees}</Text>
                        <Text>Founded in: {company.founded_year}</Text>
                        <Text>Money raised: {company.total_money_raised}</Text>
                    </View>
                    <View style={styles.border}>
                        <Text>Phone: {company.phone_number}</Text>
                        <Text>Mail: {company.email_address}</Text>
                        <Text>Website: {company.homepage_url}</Text>
                    </View>
                </View>
                <Text style={styles.description}>{company.overview}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor:'rgba(155,238,239,0.59)',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text_name: {
        backgroundColor:'rgba(155,238,239,0.48)',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#7e7e7e',
        fontWeight: 'bold',
        fontSize: 32,
        padding:5
    },
    text_category: {
        backgroundColor:'rgba(155,238,239,0.48)',
        textAlign: 'center',
        color: '#3c3c3c',
        fontWeight: 'bold',
        fontSize: 24,
        padding:10
    },
    border:{
        flex:1,
        borderWidth:1,
        padding:5
    },
    description:{
        backgroundColor:'rgba(155,238,239,0.48)',
        borderWidth: 1,
        textAlign:'justify',
        padding:5
    }
});

export default Company;