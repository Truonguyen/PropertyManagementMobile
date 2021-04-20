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
          secureTextEntry={true}
          onChangeText={(lastName) => props.setLastName(lastName)}
        />
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
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

      <TouchableOpacity onPress={props.RegisterComponent} style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity> 
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
    padding: 10,
    marginLeft: 20, 
    alignItems: "center",
    justifyContent: "center", 
    alignSelf: "center", 
    alignContent: "center"
   
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
    marginTop: 40,
    backgroundColor: "#8da9c4",  
    alignContent: "center",
    alignSelf: "center"

  },
});
