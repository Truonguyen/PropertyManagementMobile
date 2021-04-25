import React from "react";
import {
  StyleSheet,
  Dimensions,
  Linking,
  Image,
  View,
  Text,
} from "react-native";

const { height, width } = Dimensions.get("window");

const ContactForm = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent1}>
        <Text style={styles.textContact}>Contact Tiffany</Text>
        <Image source={require("../assets/tiffany.png")} style={styles.image} />
        <Text
          onPress={() => {
            Linking.openURL("tel:3523907495");
          }}
          style={styles.text}
          style={styles.text}
        >
          Phone: 352-390-7495
        </Text>
        <Text style={styles.text}>Email: tsaikevin94@yahoo.com</Text>
      </View>

      <View style={styles.parent2}>
        <Text style={styles.textContact}> Contact Kevin</Text>
        <Image source={require("../assets/kevin.png")} style={styles.image} />
        <Text
          onPress={() => {
            Linking.openURL("tel:3522004273");
          }}
          style={styles.text}
        >
          Phone: 352-200-4273
        </Text>
        <Text style={styles.text}>Email: kevin13560@yahoo.com.tw</Text>
      </View>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  parent1: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderEndColor: "#0B2545",
    marginTop: 0.02 * width,
    borderLeftColor: "#0B2545",
    marginBottom: 0.03 * width,
    marginLeft: 0.09 * width,
    marginRight: 0.09 * width,
  },

  parent2: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderEndColor: "#0B2545",
    borderLeftColor: "#0B2545",
    marginBottom: 0.03 * width,
    marginLeft: 0.09 * width,
    marginRight: 0.09 * width,
  },

  image: {
    width: 0.3 * height,
    height: 0.5 * width,
    borderRadius: 20,
  },

  textContact: {
    marginBottom: 0.02 * width,
    fontWeight: "bold",
    fontSize: 25,
    color: "#0B2545",
  },

  text: {
    fontSize: 17,
    marginTop: 0.005 * width,
  },
});
