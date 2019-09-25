import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompany from "../screens/NewCompany";

const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search:SearchNavigator,
        NewCompany: NewCompany
    },
    {
        initialRouteName:'Home'
    }// route de navogation
);

export default createAppContainer(AppNavigator);