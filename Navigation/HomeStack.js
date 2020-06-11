import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

//import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import Home from "../Components/Home";
import Tracking from "../Components/Tracking";
import Login from "../Components/Login";
import Enter from "../Components/EnterRecord";
import Forward from "../Components/ForwardDocument";
import Confirmation from "../Components/Confirmation";

//import SideBar from "../Components/SideBar";

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Tracking: {
    screen: Tracking,
  },
  Enter: {
    screen: Enter,
  },
  Forward: {
    screen: Forward,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: AppDrawerNavigator,
  },
  Profile: {
    screen: AppDrawerNavigator,
  },
  Enter: {
    screen: AppDrawerNavigator,
  },
  Confirmation: {
    screen: Confirmation,
  },
});

export default createAppContainer(AppSwitchNavigator);
/*const screens={
  Login:{
    screen: Login
  },
  Home:{
    screen: Home
  },
  Profile:{
    screen: AppDrawerNavigator
  },
}

const Homestack=createStackNavigator(screens);

export default createAppContainer(Homestack);*/
