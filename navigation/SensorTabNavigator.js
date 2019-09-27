import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Accelerometre from "../screens/sensors/Accelerometre";
import Gyro from "../screens/sensors/Gyro";
import Gps from "../screens/sensors/Gps";
import ImageP from "../screens/sensors/ImageP";

const SensorTabNavigator = {
    Accelerometre: Accelerometre,
    Gyroscope: Gyro,
    GPS:Gps,
    ImagePicker: ImageP
};

export default createBottomTabNavigator(SensorTabNavigator);