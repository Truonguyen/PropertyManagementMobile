import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, 
  Dimensions, 
} from "react-native"; 
import RegisterComponent from "./RegisterComponent"; 

const {height, width} = Dimensions.get("window"); 

export default function App () { 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [jwt, setJWT] = useState("");

  const test = () => { 
    fetch("http://localhost:8080/Users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.JWT);
        setJWT(responseJson.JWT);
        setUser(!user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return ( 
    <View style={styles.container}>
      {
        <RegisterComponent
          checkEmail={test}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      }
    </View>
  );
}
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", 
  }
}); 
