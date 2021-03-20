import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import SearchScreen from "./SearchScreen";
import SaveScreen from "./SaveScreen";
import LoginScreen from "./LoginScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
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
        tabBarLabel: "Login",
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
  },

  {
    initialRouteName: "Search",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#f69b31" },
  }
);

export default createAppContainer(TabNavigator);
