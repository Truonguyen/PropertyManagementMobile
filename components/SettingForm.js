import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik"; // npm install formik

const SettingForm = (props) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ first: "", last: "", password: "" }}
        // handleSubmit run onSubmit
        onSubmit={(values) => {
          console.log(values);
          props.updatefName(values.first);
          props.updatelName(values.last);
          //props.updatePassword(values.password);

          console.log(values.first);
          console.log(values.last);
          console.log(values.password);
          console.log("from setting form " + props.getJWT);
          fetch("http://192.168.0.2:8080/Users/edit", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FirstName: values.first,
              LastName: values.last,
              Password: values.password,
              JWT: props.getJWT,
            }),
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log("success");
              props.updateJWT(responseJson.JWT);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={props.handleChange("first")}
              value={props.values.first}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder="Last Name"
              onChangeText={props.handleChange("last")}
              value={props.values.last}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />

            <Button
              color="maroon"
              title="Submit"
              onPress={props.handleSubmit}
            />
            {/* <TouchableOpacity
              style={styles.butt}
              onPress={{props.handleSubmit;
              }}
              
            >
              <Text>Submit</Text>
            </TouchableOpacity> */}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SettingForm;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  butt: {
    backgroundColor: "#1E6738",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
