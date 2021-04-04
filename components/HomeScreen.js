import React, { useState } from "react";
import { Component } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet, Slider,  Text, TouchableOpacity,  View } from "react-native"; 

const {height, width} = Dimensions.get("window"); 

class HomeScreen extends Component { 
  render () {
  return (
    <View style = {styles.container}>
      <View style ={styles.slider}> 

      <Image source={require("../assets/logo.png")} />
       
      </View> 
      <View style = {styles.footer}>  
      <Text style ={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </Text>
      </View> 
    
    </View> 



  );
  }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: "white"

  }, 
  
  slider: {
    flex: 2 * height, 
    backgroundColor: "#8DA9C4",  
    borderTopRightRadius: 75, 
    borderBottomLeftRadius: 75
   
  }, 

  footer: {
    flex: 1 * height

  }, 
  
  text: {
   color: "#0B2545", 
  }

  

});

export default HomeScreen;