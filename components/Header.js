import React from "react";
import { StyleSheet, Text } from "react-native";

export function Header({ children, style, ...props }) {
  return (
    <Text {...props} style={[style, styles.text]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
});
