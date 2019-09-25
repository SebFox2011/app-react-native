import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Home from "../screens/Home";

const AppNavigator = createDrawerNavigator({Home: Home },
    {
        initialRouteName:'Home'
    }// route de navogation
);

export default createAppContainer(AppNavigator);