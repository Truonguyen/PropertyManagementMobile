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
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0025,
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
      >
        {/* CALLOUT */}
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>
                2610 se 67th street Ocala Fl 34480
              </Text>
              <Text>1 bed | 10 bath | 420 sqft | $1,100/month</Text>
              <Image
                style={styles.image}
                source={require("../assets/house_25.jpg")}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    marginBottom: 5,
  },
  map: {
    height: "100%",
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.2,
    padding: 15,
    width: 300,
    alignItems: "center",
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
    marginTop: -0.5,
  },

  image: {
    marginTop: 20,
    width: 120,
    height: 80,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchcScreen;
