import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet,  Text, TouchableOpacity,  View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style = {styles.container}>  
      <ImageBackground source = {require('../assets/b1.png')} style = {styles.topContainer}> 
      </ImageBackground> 
      <View style = {styles.bottomContainer}>  
       
      <TouchableOpacity style={styles.sideContainer}>
       
      </TouchableOpacity>   
      <Text>LOGIN</Text>

      <TouchableOpacity style={styles.side1Container}>
        <Text>Save</Text>
      </TouchableOpacity>   
      </View>
      <View style = {styles.bottom1Container}>   
      
      <TouchableOpacity style={styles.side2Container}>
        <Text>Save</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.side3Container}>
        <Text>Save</Text>
      </TouchableOpacity>  
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
    flex: 2.5,
    flexDirection: "column", 
    width: '100%', 
    height: '100%',   
  }, 

  bottomContainer: { 
    flex: 1,
    flexDirection: "row", 
    backgroundColor: "#8DA9C4",
     
  },  

  bottom1Container: { 
    flex: 1,
    flexDirection: "row", 
    backgroundColor: "#8DA9C4",
    
  }, 

  sideContainer: {  
    flex: 1, 
    flexDirection: "row",  
   
  }, 

  side1Container: {  
    flex: 1, 
    flexDirection: "row",  
   
  }, 

  side2Container : {
    flex: 1, 
    flexDirection: "row",  
    width: "10%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center", 
    marginTop: 50,
    backgroundColor: "white",
  }, 

  side3Container: {
    flex: 1, 
    flexDirection: "row", 
  }
  
    
 
  
});

export default HomeScreen;