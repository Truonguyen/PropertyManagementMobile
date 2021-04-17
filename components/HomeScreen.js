import React, { useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Slider from "./Slider";

const { height, width } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
];

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/JMHP.png")} style={styles.image} />
      </View>
      <View style={styles.slider}>
        <Slider images={images} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B2545",
  },

  slider: {
    flex: 1.7 * height,
    backgroundColor: "#8DA9C4",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
  },

  text: {
    marginTop: 50,
  },

  image: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 0.99 * width,
    margin: 0.05 * height,
    backgroundColor: "white",
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
  header: {
    backgroundColor: "white",
    flex: 0.51 * height,
    alignContent: "center",
    alignSelf: "center",
    borderBottomRightRadius: 140,
    borderTopLeftRadius: 190,
  },
});

export default HomeScreen;
