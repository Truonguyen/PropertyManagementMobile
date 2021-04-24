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
import axios from "axios";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");
  const [registerPage, setRegisterPage] = useState(false);
  const [user, setUser] = useState(false);
  const [status, setStatus] = useState(""); 
  const [registerStatus, setRegisterStatus] = useState(""); 
   

  const login = () => {
    // fetch("http:/192.168.0.2:8080/Users/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Email: email,
    //     Password: password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson.JWT);
    //     setJWT(responseJson.JWT);
    //     setUser(true);
    //     setRegisterPage(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    if (email.length == 0) setStatus("Email is empty. Try again");
    else if (password.length == 0) setStatus("Password is empty. Try again");
    else {
      axios
        .post("http://192.168.0.118:8080/Users/login", {
          Email: email,
          Password: password,
        })
        .then((response) => {
          console.log(response);
          setJWT(response.data.JWT);
          setUser(true);
          setRegisterPage(false);
        })
        .catch((error) => {
          if (error.request.status == 400) setStatus("Wrong Username/Password");
        });
    }
  };

  const register = () => {  
    if (firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length ==0) setRegisterStatus ("Please fill out all fields");   
    else {
    console.log("hi");
    axios
      .post("https://group19-housingmanager.herokuapp.com/Users/register", {
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
      })
      .then((response) => {
        console.log(response);
        console.log("pineapple");
      })
      .catch((error) => {
        if (error.request.status == 400) setRegisterStatus("Email is already in use!");
      });
    } 
  };

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
  

  // axios.post();

  const toggleRegister = () => {
    setRegisterPage(!registerPage);
  };

  const toggleUser = () => {
    setUser(false);
  };

  return (
    <View style={styles.container}>
      {(() => {
        if (user && !registerPage) {
          return <Profile checkRegister={setUser} userKey={jwt} />;
        } else if (!user && registerPage) {
          return ( 
            <View>
            <RegisterComponent
              checkEmail={register}
              setEmail={setEmail}
              setPassword={setPassword}
              setFirstName={setFirstName}
              setLastName={setLastName}
              checkRegister={toggleRegister}
            /> 
            <Text style={styles.rstatusText}>{registerStatus}</Text> 
            </View>
          );
        } else if (!user && !registerPage) {
          return (
            <View>
              <LoginComponent
                checkUser={login}
                checkRegister={toggleRegister}
                setEmail={setEmail}
                setPassword={setPassword}
              />
              <Text style={styles.statusText}>{status}</Text>
            </View>
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
  statusText: {
    color: "#B22222",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  }, 

  rstatusText: {
    color: "#B22222",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
