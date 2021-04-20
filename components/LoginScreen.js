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
} from "react-native";
import LoginComponent from "./LoginComponents";
import Profile from "./Profile";
import RegisterScreen from "./RegisterScreen";
import RegisterComponent from "./RegisterComponent";
import { StackNavigator } from "react-navigation"; 

export default function App() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");
  const [registerPage, setRegister] = useState(false);
  
  const login = () => {
    //console.log("hello");
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

  const register = () => {
    console.log("Going to register screen");
    setRegister(!registerPage);
    console.log(registerPage);
    
    return (
      <View style={styles.container}>
        <RegisterComponent
          checkEmail={setEmail}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {user?  ( <Profile />) : (
          <LoginComponent
            checkUser={login}
            setEmail={setEmail}
            setPassword={setPassword}
            goToRegister={register}
          />
        )
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
  },

});
