import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet,  Text, View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style = {styles.container}>  
      <ImageBackground source = {require('../assets/b1.png')} style = {styles.topContainer}> 
      </ImageBackground> 
      <View style = {styles.bottomContainer}>  


      </View>
    </View>
    
 

  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: "column",
    backgroundColor: 'white', 
  }, 
  
  topContainer: {
    flex: 1.5,
    flexDirection: "column", 
    width: '100%', 
    height: '100%',   
  }, 

  logo: {
    alignContent: "center", 
    justifyContent: "center",  
    position: "absolute",
    flexDirection: "column", 
  },
  
  bottomContainer: { 
    flex: 1,
    flexDirection: "column", 
    backgroundColor: "#8DA9C4",
    
  }
  
    
 
  
});

export default HomeScreen;