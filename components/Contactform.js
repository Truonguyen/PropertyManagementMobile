import React from "react"; 
import { 
  StyleSheet, 
  Dimensions, 
  Image, 
  View, 
  Text } from "react-native"; 

const { height, width } = Dimensions.get("window");


const ContactForm = (props) => { 

    return ( 
        <View style={styles.container}>  

        <View style = {styles.parent1}>  
        <Image source={require("../assets/tiffany.png")} style={styles.image1} />
          
          <Text style = {styles.text}> 
            Name: John Cena
          </Text>  
          <Text style = {styles.text}> 
            Phone: 123-123-1234
          </Text> 
          <Text style = {styles.text}> 
            Email: JohnCena123@gmail.com
          </Text>
    

        </View>  

        <View style = {styles.parent2}>  
        <Image source={require("../assets/kevin.png")} style={styles.image1} />
        
          <Text style = {styles.text}> 
            Name: John Cena
          </Text>  

          <Text style = {styles.text}> 
            Phone: 123-123-1234
          </Text> 

          <Text style = {styles.text}> 
            Email: JohnCena123@gmail.com
          </Text>

        </View> 
      </View>
    )};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent: "center", 
    
  },  

  parent1: { 
    flex : 0.5,  
    flexDirection: "column",
    alignItems: "center",
  },  

  parent2:{ 
    flex : 0.5,  
    flexDirection: "column",
    alignItems: "center",
  },  

  image1: { 
    width: 0.25 * height,  
    height: 0.5 * width, 
    borderRadius: 20


  },  

  

  text: {
    fontFamily: "notoserif", 
  }


});   

