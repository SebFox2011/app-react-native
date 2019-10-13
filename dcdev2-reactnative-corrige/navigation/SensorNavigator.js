import { createBottomTabNavigator } from "react-navigation-tabs";
import Accelerometer from "../screens/sensors/Accelerometer";
import Gyroscope from "../screens/sensors/Gyroscope";
import Location from "../screens/sensors/Location";
import ImageSelector from "../screens/sensors/ImageSelector";

const SensorNavigator = {
  Accelerometer: Accelerometer,
  Gyroscope: Gyroscope,
  Location: Location,
  ImageSelector: ImageSelector
};

export default createBottomTabNavigator(SensorNavigator);
