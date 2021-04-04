import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import SearchScreen from "./SearchScreen";
import SaveScreen from "./SaveScreen";
import LoginScreen from "./LoginScreen"; 
import HomeScreen from "./HomeScreen"; 

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    }, 

    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-search"}
            />
          </View> 
        ), 
      },
    },

    Save: {
      screen: SaveScreen,
      navigationOptions: {
        tabBarLabel: "Save",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-settings"}
            />
          </View>
        ),
      },
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
      },
    },
  },

  {
    initialRouteName: "Home",
    activeColor: "#FEFEFF",
    inactiveColor: "#A4A4A7",
    barStyle: { backgroundColor: "#0B2545" },
  }
);

export default createAppContainer(TabNavigator);
