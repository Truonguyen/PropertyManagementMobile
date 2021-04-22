import React, {
  useState,
  SafeAreaView,
  TouchableHighlight,
  useEffect,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Linking,
} from "react-native";
import { Entypo, AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import SettingForm from "./SettingForm";

const Profile = (props) => {
  const [settingModal, setSettingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const [email, setEmail] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [jwt, setJWT] = useState(props.userKey);

  const getProfile = () => {
    //console.log("hello");
    fetch("http://192.168.0.3:8080/Users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        JWT: jwt,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setfName(responseJson.FirstName);
        setlName(responseJson.LastName);
        setEmail(responseJson.Email);

        // setJWT(responseJson.JWT);
        // setUser(true);
        // setRegisterPage(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("hello there");
    getProfile();
  }, []);
  return (
    <View style={styles.container}>
      {/* PROFILE  =================================================================*/}
      <View style={styles.profile}>
        <Avatar.Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          }}
          size={80}
        />
        <View style={styles.personalInfo}>
          <Text style={styles.name}>
            Welcome {fName} {lName}
          </Text>
          <Text>It's Another Day In Paradise</Text>
        </View>
      </View>
      {/* additional profile information */}
      <View style={styles.userInfo}>
        <View style={styles.row}>
          <MaterialIcons name="email" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Email: {email}</Text>
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
        {/* MAINTENANCE (OPEN EXTERNAL LINK) */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              "https://docs.google.com/forms/d/17Tq-HrXiB-kT6WhtURNdJ-yQJO7aLsUk5a3OBeCL4Dc/viewform?edit_requested=true"
            )
          }
        >
          <Entypo name="tools" size={24} color="white" />
          <Text style={{ color: "white" }}>Maintenance</Text>
        </TouchableOpacity>
        {/* SETTING */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSettingModal(true);
            console.log(jwt);
          }}
        >
          <AntDesign name="setting" size={24} color="white" />
          <Text style={{ color: "white" }}>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setContactModal(true)}
        >
          <Feather name="phone-call" size={24} color="white" />
          <Text style={{ color: "white" }}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.checkRegister} style={styles.button}>
          <AntDesign name="logout" size={24} color="white" />
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deleteView}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => console.log("DELETE ACCOUNT")}
        >
          {/* <Feather name="phone-call" size={24} color="white" /> */}
          <Text style={{ color: "white" }}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      {/* MODALS ===================================================================================================== */}
      {/* SETTING MODAL */}
      <Modal visible={settingModal} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setSettingModal(false)}
          />
          <SettingForm />
        </View>
      </Modal>

      {/* CONTACT MODAL */}
      <Modal visible={contactModal} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setContactModal(false)}
          />
          <Text> Name: John Cena</Text>
          <Text> Email: JohnCena123@gmail.com</Text>
          <Text> Phone: 123-123-1234</Text>
        </View>
      </Modal>
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
  deleteView: {
    flexDirection: "column",
  },
  delete: {
    marginTop: 40,
    alignItems: "center",
    borderWidth: 1,
    //borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "#1C2541",
    padding: 10,
    // width: "50%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  personalInfo: {
    marginLeft: 15,
    marginTop: 15,
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

  //======================
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
