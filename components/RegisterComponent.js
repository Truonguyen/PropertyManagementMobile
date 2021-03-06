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

const RegisterComponent = (props) => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
  //console.log(props); 

  return (
    <View> 
      <Text style ={styles.account}>Account Registration</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => props.setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => props.setLastName(lastName)}
        />
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.emailTextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => props.setEmail(email)}
        />
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => props.setPassword(password)}
        />
      </View>
      
      <View>
      <TouchableOpacity onPress={props.checkEmail} style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>  

      <TouchableOpacity onPress={props.checkRegister} style={styles.loginBtn}>
        <Text style = {styles.registerButton}>BACK</Text>
      </TouchableOpacity> 
      </View> 
    </View>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", 
    alignSelf: "center", 
    alignContent: "center"
  },

  inputView: { 
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
   
    marginLeft: 0.01 * height, 
    alignItems: "center",
    justifyContent: "center", 
    alignSelf: "center", 
    alignContent: "center", 
   
  },  

  emailTextInput :{ 
    height: 50,
    flex: 1,
   
    marginLeft: 0.009 * height, 
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
    alignSelf: "center", 
  
  },

  loginBtn: {
    width: width * 0.4,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.04 * width, 
    backgroundColor: "#8da9c4",  
    alignContent: "center",
    alignSelf: "center",
    marginLeft: 0.02 * width

  }, 
  account: {
    marginBottom: 0.04 * width,  
    marginLeft: 0.009 * width,
    alignSelf: "center",  
    alignContent: "center", 
    fontWeight: "bold", 
    fontSize: 30, 
    color: "#13315C"
  }
});
