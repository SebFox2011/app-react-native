import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompany from "../screens/NewCompany";
import Contact from "../screens/Contact";
import SensorTabNavigator from "./SensorTabNavigator";

const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search:SearchNavigator,
        NewCompany: NewCompany,
        Sensors:SensorTabNavigator,
        Contact:Contact
    },
    {
        initialRouteName:'Home'// route par défaut
    }// route de navigation
);

export default createAppContainer(AppNavigator);