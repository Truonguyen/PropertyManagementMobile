import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");

const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(props);

  return (
    <View>   
      <View style = {styles.container2}>
      <Image source = {require("../assets/logo4.png")} style = {styles.image}/>  
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}> 
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => props.setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => props.setPassword(password)}
        /> 
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.checkUser} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.checkRegister}
        style={styles.registerButton}
      >
        <Text style={styles.registerButton}>New user? Register here</Text>
      </TouchableOpacity>
      <Text>{props.set}</Text> 
     
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  }, 

  container2: {  
    alignSelf: "flex-start", 
    alignItems: "flex-start", 
    alignContent: "flex-start",  
    justifyContent: "flex-start"
  }, 

  image: {  

    alignSelf: "center", 
    marginRight: 0.03 * height, 
    marginBottom: 0.1 * width

  }, 

  inputView: {  
    alignSelf: "center", 
    backgroundColor: "#A4A4A7",
    borderRadius: 30,
    width: width * 0.75,
    height: 45,
   marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },

  registerButton: {
    alignSelf: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    //alignContent: "center"
  },

  loginBtn: {
    width: width * 0.4,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //marginTop: 40, 
    marginBottom: 0.04 * width,
    backgroundColor: "#8da9c4",
    alignContent: "center",
    alignSelf: "center",
  },
});
