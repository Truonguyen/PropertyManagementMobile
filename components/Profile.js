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
import ContactForm from "./ContactForm";
import axios from "axios";

const Profile = (props) => {
  const [settingModal, setSettingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [jwt, setJWT] = useState(props.userKey);

  const getProfile = () => {
    //console.log("hello");
    fetch("http://192.168.0.2:8080/Users/", {
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
        setJWT(responseJson.JWT);
        //console.log(jwt);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteAcc = () => {
    console.log("in delete" + jwt);
    axios
      .post("http://192.168.0.2:8080/Users/delete", {
        JWT: jwt,
      })
      .then((response) => {
        console.log(response);
        console.log("deleted==================");
        // setJWT(response.data.JWT);
        // setUser(true);
        // setRegisterPage(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //setJWT(props.userKey);
    getProfile();
    props.resetEmail("");
    props.resetPass("");
    props.resetStatus("");
    console.log("RELOAD PAGE jwt is " + jwt);
  }, []);
  return (
    <View style={styles.container}>
      {/* PROFILE  =================================================================*/}
      <View style={styles.profile}>
        <Avatar.Image source={require("../assets/leinecker.jpg")} size={80} />
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

        <TouchableOpacity
          onPress={() => props.checkRegister(false)}
          style={styles.button}
        >
          <AntDesign name="logout" size={24} color="white" />
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deleteView}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            deleteAcc();
            props.checkRegister(false);
          }}
        >
          {/* <Feather name="phone-call" size={24} color="white" /> */}
          <Text style={{ color: "white" }}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      {/* MODALS ===================================================================================================== */}

      {/* SETTING MODAL */}
      <Modal visible={settingModal} animationType="slide">
        <View style={{ flex: 1, padding: 20 }}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setSettingModal(false)}
          />
          {console.log("passing to setting modal " + jwt)}
          <SettingForm
            updatefName={setfName}
            updatelName={setlName}
            getJWT={jwt}
            updateJWT={setJWT}
          />
        </View>
      </Modal>

      {/* CONTACT MODAL */}
      <Modal visible={contactModal} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{
              ...styles.modalContactToggle,
              ...styles.modalContactClose,
            }}
            onPress={() => setContactModal(false)}
          />
          <ContactForm />
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
    alignItems: "center",
  },
  delete: {
    marginTop: 40,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgray",
    backgroundColor: "#B22222",
    padding: 10,
    width: "50%",
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
    backgroundColor: "#0B2545",
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
  modalContactToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#B22222",
  },

  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },

  modalContactClose: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: "lightgray",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#0B2545",
  },
});
