import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {Image, ScrollView, StyleSheet,  Text, TouchableOpacity,  View } from "react-native"; 


const HomeScreen = (props) => {
  return (
    <View style = {styles.container}>  
      <ImageBackground source = {require('../assets/b1.png')} style = {styles.topContainer}>  
       <Image source ={require ('../assets/logo.png')} style = {styles.image}> 
       </Image> 
      </ImageBackground>  

      
      
         
      
     
    </View>
    
 

  );
};


const styles = StyleSheet.create({
  container: {   
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'white',  
    alignContent: "center", 
    justifyContent: "center"
  }, 
  
  topContainer: {
    flex: 2.5,
    flexDirection: "column", 
    width: '100%', 
    height: '100%',   
  },  

  image : {
    alignContent: "center", 
    justifyContent: "center",  
    alignSelf: "center"
  }
  
    
 
  
});

export default HomeScreen;