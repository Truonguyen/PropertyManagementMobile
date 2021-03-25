import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

const SearchcScreen = (props) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 29.11878378360867,
        longitude: -82.10061956042549,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        style={styles.marker}
        title="2610 SE 67th St, Ocala, FL 34480"
        description="2 bds 2ba 1000 sqft - HOUSE FOR RENT"
        coordinate={{
          latitude: 29.11878378360867,
          longitude: -82.10061956042549,
        }}
        image={require("../assets/map_marker_50.png")}
      />

      {/* <Callout tooltip>
        <View>
          <View style={styles.bubble}></View>
          <Text>A short description</Text>
          <Image
            style={styles.image}
            source={require("../assets/house_25.jpg")}
          />
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  map: {
    height: "100%",
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },

  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.05,
  },

  image: {
    width: 120,
    height: 80,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchcScreen;
