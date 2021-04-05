import React, { useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet,  Text, TouchableOpacity,  View } from "react-native"; 
import Slider from  "./Slider"; 

const {height, width} = Dimensions.get("window");  

const images = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
];

const HomeScreen = (props) => {
  return (
    <View style = {styles.container}>
      <View style ={styles.slider}>
        <Slider images={images} styles = {styles.slider1}/>
      </View> 
      <View style = {styles.footer}> 
      </View> 

    </View> 



  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: "#8DA9C4"

  }, 
  
  slider: {
    flex: 2 * height, 
    backgroundColor: "#0B2545",  
    borderTopRightRadius: 75, 
    borderBottomLeftRadius: 155
   
  }, 

  slider1: {
    width: 50,  
    marginBottom: 60 * height
   
  }, 

  footer: { 
    flex: 1 * height,
    flexDirection: "column",
    borderTopLeftRadius: 95, 
    backgroundColor: "white",  
    borderBottomLeftRadius: 155, 
    borderTopRightRadius: 175
  }, 
  

  

});

export default HomeScreen;