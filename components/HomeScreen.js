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

      
<<<<<<< HEAD
      
         
=======
      {/* icons documentation: https://docs.expo.io/guides/icons/ */}
      <View style = {styles.bottomContainer}>  
       
        <TouchableOpacity
          style={styles.sideContainer}
          onPress={() => console.log("Maintenance")}
        >
          <Entypo name="tools" size={24} color="white" />
          <Text style={{ color: "white" }}>Maintenance</Text>
        </TouchableOpacity>
     
        <TouchableOpacity
          style={styles.side1Container}
          onPress={() => console.log("Contact")}
        >
          <Feather name="user" size={24} color="white" />
          <Text style={{ color: "white" }}>Account</Text>
        </TouchableOpacity> 
     
        <TouchableOpacity
          style={styles.side1Container}
          onPress={() => console.log("Contact")}
        >
          <Feather name="list" size={24} color="white" />
          <Text style={{ color: "white" }}>Listings</Text>
        </TouchableOpacity> 
 

        <TouchableOpacity
          style={styles.side1Container}
          onPress={() => console.log("Contact")}
        >
          <Feather name="phone-call" size={24} color="white" />
          <Text style={{ color: "white" }}>Contact us</Text>
        </TouchableOpacity>   
       
>>>>>>> c2d9f91d0967c62814c4b63ef9c910f97fd9714a
      
      </View>
     
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
    flex: 1,
    flexDirection: "column", 
    width: '100%', 
    height: '100%',   
<<<<<<< HEAD
  },  

  image : {
    alignContent: "center", 
    justifyContent: "center",  
    alignSelf: "center"
=======
  }, 

  bottomContainer: {  
    flexDirection: "row",
    flexWrap: "wrap", 
    backgroundColor: "#8DA9C4",
     
  },  

  bottom1Container: { 
    flex: 1,
    flexDirection: "row", 
    backgroundColor: "#8DA9C4",
    
  }, 

  sideContainer: {  
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#8DA9C4",
    padding: 10,
    width: "50%",
    //marginRight: 10,
    //marginTop: 10, 
   
  }, 

  side1Container: {  
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#8DA9C4",
    padding: 10,
    width: "50%",
    //marginRight: 10,
    //marginTop: 10,
   
  }, 

  side2Container : {
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#8DA9C4",
    padding: 10,
    width: "50%",
    //marginRight: 10,
    //marginTop: 10,
   
  }, 

  side3Container: {
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#8DA9C4",
    padding: 10,
    width: "50%",
    //marginRight: 10,
    //marginTop: 10, 
>>>>>>> c2d9f91d0967c62814c4b63ef9c910f97fd9714a
  }
  
    
 
  
});

export default HomeScreen;