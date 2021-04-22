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
import axios from "axios"; 
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
    fetch("http://192.168.0.118:8080/Users/login", {
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
        console.log("HI there")
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
    axios.post('http://192.168.0.118:8080/Users/register', {
      Email: email, 
      Password: password,
      FirstName: firstName,
      LastName: lastName
    })
    .then((response) => {
      console.log(response); 
      console.log("pineapple")
    } ).catch(error => console.log(error));
  
  //   fetch("http://192.168.0.118:8080/Users/register", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ 
  //       Email: email, 
  //       Password: password,
  //       FirstName: firstName,
  //       LastName: lastName
       
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson.JWT);
  //       console.log("Pineapple")
  //       setUser(true);
  //     })
  //     .catch((error) => {
  //       console.log(email) 
  //       console.log(password) 
  //       console.log(firstName) 
  //       console.log(lastName)
  //       console.error(error); 
  //     });
   }; 

  axios.post()

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

          return <Profile checkRegister={toggleUser} />;
        } 
        else if (!user && registerPage) {
          return (
            <RegisterComponent
             
              doubleCheck={register}
              setEmail={setEmail}
              setPassword={setPassword}
              setFirstName={setFirstName}
              setLastName={setLastName}
              checkRegister={toggleRegister} 
             
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
