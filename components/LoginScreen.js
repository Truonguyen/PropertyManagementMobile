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
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
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
 

  inputView: {
    backgroundColor: "#A4A4A7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8da9c4",
  },
});