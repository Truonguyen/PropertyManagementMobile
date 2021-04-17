// import React, { useState } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import { TextInput } from "react-native-paper";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { Header } from "../components/Header";
// import { Input } from "../components/Input";
// import { FilledButton } from "../components/Input";

// export function LoginScreen ({navigation}) {
//   const {login} = React.useContext(AuthContext);
//   const [email, setEmail] = React.useState("bithovendev@gmail.com");
//   const [password, setPassword] = React.useState("abc");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState("");

//   return (
//     <Auth container>
//       <Header>This is login screen</Header>
//       <Input
//         style={styles.input}
//         placeholder={"Email"}
//         value={email}
//         onChangeText={setEmail}
//       />

//       <Input
//         style={styles.input}
//         placeholder={"Password"}
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//        <FilledButton
//         title={"Login"}
//         style={styles.loginButton}
//         // onPress={async () => {
//         //   try {
//         //     setLoading(true);
//         //     await login(email, password);
//         //   } catch (e) {
//         //     setError(e.message);
//         //     setLoading(false);
//         //   }
//         // }}

//       />
//     </Auth>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 100,
//     alignItems: "center",
//   },

//   input: {
//     marginVertical: 8,
//   },

//   loginButton: {
//     marginVertical: 32,
//   },
//   // textInput: {
//   //   flex: 1,
//   //   marginTop: Platform.OS === "ios" ? 0 : -12,
//   //   paddingLeft: 10,
//   //   color: "#05375a",
//   // },
// });

// export default LoginScreen;

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
import { StackNavigator } from "react-navigation";

export default function App() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");

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

  return (
    <View style={styles.container}>
      {user ? (
        <Profile />
      ) : (
        <LoginComponent
          checkUser={login}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
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

  // inputView: {
  //   backgroundColor: "#A4A4A7",
  //   borderRadius: 30,
  //   width: width * 0.75,
  //   height: 45,
  //   marginBottom: 20,

  //   alignItems: "center",
  // },

  // TextInput: {
  //   height: 50,
  //   flex: 1,
  //   padding: 10,
  //   marginLeft: 20,
  // },

  // forgot_button: {
  //   height: 30,
  //   marginBottom: 30,
  // },

  // loginBtn: {
  //   width: width * 0.4,
  //   borderRadius: 25,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 40,
  //   backgroundColor: "#8da9c4",
  // },
});
