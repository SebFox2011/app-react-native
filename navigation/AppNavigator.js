import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompany from "../screens/NewCompany";
import Contact from "../screens/Contact";

const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search:SearchNavigator,
        NewCompany: NewCompany,
        Contact:Contact
    },
    {
        initialRouteName:'Home'// route par défaut
    }// route de navigation
);

export default createAppContainer(AppNavigator);