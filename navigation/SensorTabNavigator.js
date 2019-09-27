import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Accelerometre from "../screens/sensors/Accelerometre";
import Gyro from "../screens/sensors/Gyro";
import Gps from "../screens/sensors/Gps";

const SensorTabNavigator = {
    Accelerometre: Accelerometre,
    Gyroscope: Gyro,
    GPS:Gps
};

export default createBottomTabNavigator(SensorTabNavigator);