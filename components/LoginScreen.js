import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { FilledButton } from "../components/Input";

const LoginScreen = (props) => {
  // const { login } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("bithovendev@gmail.com");
  const [password, setPassword] = React.useState("abc");
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState("");

  return (
    <View style={styles.container}>
      <Header>This is login screen</Header>
      <Input
        style={styles.input}
        placeholder={"Email"}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    alignItems: "center",
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  },
  // textInput: {
  //   flex: 1,
  //   marginTop: Platform.OS === "ios" ? 0 : -12,
  //   paddingLeft: 10,
  //   color: "#05375a",
  // },
});

export default LoginScreen;
