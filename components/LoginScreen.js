import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>

      <View>
        <Text>Email</Text>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        {/* <TextInput>placeholder="Your email" style={styles.textInput}</TextInput> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  // textInput: {
  //   flex: 1,
  //   marginTop: Platform.OS === "ios" ? 0 : -12,
  //   paddingLeft: 10,
  //   color: "#05375a",
  // },
});

export default LoginScreen;
