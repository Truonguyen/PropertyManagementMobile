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
        <Text style = {styles.textContact}> 
            Contact Tiffany 
        </Text>
        <Image source={require("../assets/tiffany.png")} style={styles.image1} />
          
         
        
          <Text style = {styles.text}> 
            Phone: 352-390-7495
          </Text> 
          <Text style = {styles.text}> 
            Email: tsaikevin94@yahoo.com
          </Text>
    

        </View>  

        <View style = {styles.parent2}>  
        <Image source={require("../assets/kevin.png")} style={styles.image1} />
        
          <Text style = {styles.text}> 
            Name: Kevin
          </Text>  

          <Text style = {styles.text}> 
            Phone: 352-200-4273
          </Text> 

          <Text style = {styles.text}> 
            Email: kevin13560@yahoo.com.tw
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
    justifyContent: "flex-end",  
    backgroundColor: "white", 
    borderBottomLeftRadius: 50, 
     borderBottomRightRadius: 50, 
     borderTopLeftRadius: 50, 
     borderTopRightRadius: 50, 
     borderEndColor : "blue" 
     
  },  

  parent2:{ 
    flex : 0.5,  
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center"
  },  

  image1: { 
    width: 0.25 * height,  
    height: 0.5 * width, 
    borderRadius: 20,
  


  },  

  

  text: {
    fontFamily: "notoserif", 
  }


});   

