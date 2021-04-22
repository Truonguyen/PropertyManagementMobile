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
import RegisterComponent from "./RegisterComponent";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");
  const [registerPage, setRegisterPage] = useState(false);

  const login = () => {
    //console.log("hello");
    fetch("http://192.168.0.3:8080/Users/login", {
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
        setUser(true);
        setRegisterPage(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const register = () => {
    fetch("http://192.168.0.3:8080/Users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
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

  const toggleRegister = () => {
    setRegisterPage(!registerPage);
  };

  const toggleUser = () => {
    setUser((user) => !user);
  };

  return (
    <View style={styles.container}>
      {(() => {
        if (user && !registerPage) {
          return <Profile checkRegister={toggleUser} userKey={jwt} />;
        } else if (!user && registerPage) {
          return (
            <RegisterComponent
              checkRegister={toggleRegister}
              checkUser={login}
              checkRegister={toggleRegister}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          );
        } else if (!user && !registerPage) {
          return (
            <LoginComponent
              checkUser={login}
              checkRegister={toggleRegister}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          );
        }
      })()}
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
