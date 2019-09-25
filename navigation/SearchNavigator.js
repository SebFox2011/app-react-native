import {createStackNavigator} from "react-navigation-stack";
import Searchscreen from "../screens/Search";
import CompanyScreen from "../screens/Company";

const SearchNavigator = {
    Search:Searchscreen,
    Compagny:CompanyScreen
};

export default createStackNavigator (SearchNavigator)