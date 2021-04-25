import React, { useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Slider from "./Slider";
import HomeVideo from "../assets/video.mp4";
import { Video } from "expo-av";
const { height, width } = Dimensions.get("window");
const images = [
  "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
];

const HomeScreen = (props) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.logo}>Jack Mobile Home Park</Text>
        </View>

        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/video.mp4")}
            // useNativeControls
            resizeMode="contain"
            isLooping
            shouldPlay={true}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>

        <View style={styles.blue}>
          <Text style={styles.header}>
            The Family Behind Jack Mobile Home Park
          </Text>
          <Image
            style={styles.images}
            source={require("../assets/Parents.jpg")}
          />
          <Text style={styles.text}>
            Being in the mobile home business for over 20 years, we strive to
            provide affordable housing and a friendly relationship between us
            and our tennants.
          </Text>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={styles.header}>
            Browse Our Beautiful and Affordable Mobile Homes
          </Text>
          <Slider images={images} />
        </View>
      </ScrollView>
      {/* <View style={styles.header}>
     <Image source={require("../assets/logo2.png")} style={styles.image} />
    </View> */}
      {/* <View style={styles.slider}>
        <View style={styles.header}>
          <Image source={require("../assets/logo4.png")} style={styles.image} />
        </View>
        <Slider images={images} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.info}>Jack Mobile Home Park</Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DA9C4",
  },
  video: {
    alignSelf: "center",
    width: 400,
    height: 200,
  },
  videoContainer: {
    marginBottom: 30,
  },
  blue: {
    paddingTop: 20,
    backgroundColor: "#0B132B",
  },
  logo: {
    marginTop: 40,
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },

  images: {
    flex: 1,
    width: null,
    height: 300,
    resizeMode: "contain",
  },

  header: {
    marginTop: 20,
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
  // slider: {
  //   flex: 1.4 * height,
  //   backgroundColor: "#0B2545",
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 15,
  //   borderBottomRightRadius: 100000,
  // },

  // info: {
  //   color: "white",
  //   marginTop: 100,
  //   alignSelf: "center",
  // },

  // image: {
  //   alignSelf: "flex-end",
  //   alignItems: "flex-end",
  //   justifyContent: "flex-end",
  //   flex: 0.001 * height,
  //   width: 0.6 * height,
  // },
  // header: {
  //   backgroundColor: "white",
  //   flex: 0.45 * height,
  //   alignContent: "center",
  //   justifyContent: "center",
  // },
});

export default HomeScreen;
