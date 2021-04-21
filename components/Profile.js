import React, { useState, SafeAreaView, TouchableHighlight } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const Profile = (props) => {
  return (
    <View style={styles.container}>
      {/* profile  */}
      <View style={styles.profile}>
        <Avatar.Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          }}
          size={80}
        />
        <View style={styles.personalInfo}>
          <Text style={styles.name}>Truong Nguyen</Text>
          <Text>123 Knight Road, Orlando, Florida 32803</Text>
        </View>
      </View>
      {/* additional profile information */}
      <View style={styles.userInfo}>
        <View style={styles.row}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>truongvnguyen123@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Feather name="phone" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>800-800-8000</Text>
        </View>
      </View>
      {/* divider line */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
          marginBottom: 15,
        }}
      />

      {/* icons documentation: https://docs.expo.io/guides/icons/ */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Maintenance")}
        >
          <Entypo name="tools" size={24} color="white" />
          <Text style={{ color: "white" }}>Maintenance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Setting")}
        >
          <AntDesign name="setting" size={24} color="white" />
          <Text style={{ color: "white" }}>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Contact")}
        >
          <Feather name="phone-call" size={24} color="white" />
          <Text style={{ color: "white" }}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Empty")}
        >
          {/* <Feather name="phone-call" size={24} color="white" /> */}
          {/* <Text>Contact</Text> */}
        </TouchableOpacity> 

          <TouchableOpacity onPress={props.checkRegister} style={styles.button}>
        <Text style = {styles.registerButton}>Back</Text>
      </TouchableOpacity>  
      
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  personalInfo: {
    marginLeft: 15,
    width: 250,
  },
  profile: {
    flexDirection: "row",
    margin: 15,
    marginTop: 50,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    //margin: 10,
    //width: "70%",
  },
  button: {
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#1C2541",
    padding: 10,
    width: "50%",
    //marginRight: 10,
    //marginTop: 10,
  },
  userInfo: {
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
