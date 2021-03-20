import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchcScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SearchcScreen</Text>
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
});

export default SearchcScreen;
