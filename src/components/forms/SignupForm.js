import { View, StyleSheet, ImageBackground, Image} from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function SignupForm({ navigation }) {

  const [showPass, setShowPass] = React.useState(true);
  const [showRePass, setShowRePass] = React.useState(true);
  const image = { uri: 'https://wallpaperaccess.com/full/7225510.jpg' };
  const logo = require('../../img/logo.png');
  

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logosettings} resizeMode="contain"/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={styles.logintitle}>Register</Text>
      </ImageBackground>
      <Text></Text>
      <TextInput mode="contained" placeholder="Email" style={styles.emailsettings}  error={true}/>
      <TextInput mode="contained" placeholder="Password" secureTextEntry={showPass}right={<TextInput.Icon icon={!showPass ? "eye" : "eye-off"} onPress={() => setShowPass(!showPass)}/> }style={styles.passwordsettings}/>
      <TextInput mode="contained" placeholder="Re-Type Password" secureTextEntry={showPass}right={<TextInput.Icon icon={!showPass ? "eye" : "eye-off"} onPress={() => setShowPass(!showPass)}/> }style={styles.passwordsettings}/>

      <Button onPress={() => navigation.navigate("Landing")}mode="contained" style={styles.createaccButton}>Create Account</Button>
      <Button onPress={() => navigation.navigate("Landing")}mode="contained" style={styles.BaccButton}>Go Back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    width: 380, 
    height: 812,
    justifyContent: "center",
    position:"absolute",
    marginLeft:-20,
    bottom:-20,
  },
  logintitle:{
    fontWeight:'bold',
    fontSize:35,
    color:'black',
    marginTop:-500,
    textAlign:'center',   
  },
  logosettings:{
    height:250,
    width:340,
    marginTop:110,
    zIndex:2,
    marginRight:49,
  },
  createaccButton:{
    margin:1,
    textAlign:'center',
    marginTop:100,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:19,
    backgroundColor:'#D5241C',
    borderColor:"black",
    borderWidth:1,
  },
  RegistrationButton:{
    backgroundColor:'#D5241C',
    borderColor:"black",
    margin:1,
    textAlign:'center',
    marginTop:100,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:19,
    marginTop:10,
},
BaccButton:{
  margin:1,
  textAlign:'center',
  marginTop:9,
  zIndex:1,
  width:300,
  height:40,
  marginLeft:19,
  backgroundColor:'#D5241C',
  borderColor:"black",
  borderWidth:1,
},
  emailsettings:{
  marginTop:-50,
  marginBottom:6,
  },
  passwordsettings:{
marginBottom:6
  }

});