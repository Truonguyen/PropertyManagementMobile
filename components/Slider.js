// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// const HomeScreen = (props) => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React from "react";
import { render } from "react-dom";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%

export default class Slider extends React.Component {
  state = {
    active: 0,
  };
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide != this.state.active) {
      this.setState({ active: slide });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {this.props.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? styles.pagingActiveText
                  : styles.pagingText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: width * 0.95,
    height,
    alignSelf: "center",
  },

  image: {
    width,
    height,
    resizeMode: "cover",
    alignContent: "center",
    alignSelf: "center",
    position: "relative",
    // marginTop: 0.0999 * height,
  },

  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderRadius: 50,
  },

  pagingText: {
    fontSize: width / 30,
    color: "#888",
    margin: 3,
  },

  pagingActiveText: {
    fontSize: width / 30,
    color: "#fff",
    margin: 3,
  },
});
