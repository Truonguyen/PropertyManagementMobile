import React, { useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet,  Text, TouchableOpacity,  View } from "react-native"; 

const {height, width} = Dimensions.get("window"); 

const HomeScreen = (props) => {
  return (
    <View style = {styles.container}>
      <View style ={styles.slider}>
       
      </View> 
      <View style = {styles.footer}> 
      </View> 
      <View style = {styles.footer1}> 
      </View>
    </View> 



  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: "white"

  }, 
  
  slider: {
    flex: 2 * height, 
    backgroundColor: "#0B2545",  
    borderTopRightRadius: 75, 
    borderBottomLeftRadius: 75
   
  }, 

  footer: {
    flex: 1 * height 
  } 

  

});

export default HomeScreen;