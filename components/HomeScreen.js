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

    
       
      </View> 
      <View style = {styles.footer}>  
    
    
      </View>  

    
    </View> 



  );
  }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor:"#8DA9C4"

  }, 
  
  slider: {
    flex: 1.7 * height,  
    flexDirection: "column", 
    backgroundColor: "#13315C",  
    borderBottomRightRadius: 175,  
    borderTopLeftRadius: 155
  

   
  }, 

  footer: {
    flex: 1 * height,  
    flexDirection: "column",
    borderTopLeftRadius: 95, 
    backgroundColor: "white",  
    borderBottomLeftRadius: 155, 
    borderTopRightRadius: 175
  }, 
  
  text: {
   color: "#0B2545", 
  },


});

export default HomeScreen;