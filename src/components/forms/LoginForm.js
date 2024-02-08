import { View, StyleSheet, ImageBackground, Image} from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {

  const [showPass, setShowPass] = React.useState(true);
  const [showRePass, setShowRePass] = React.useState(false);
  const image = { uri: 'https://wallpaperaccess.com/full/7225510.jpg' };
  const logo = require('../../img/logo.png');
  

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logosettings} resizeMode="contain"/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={styles.logintitle}>Login</Text>
      </ImageBackground>
      <Text></Text>
      <TextInput mode="contained" placeholder="Email" style={styles.emailsettings}  error={true}/>
      <TextInput mode="contained" placeholder="Password" secureTextEntry={showPass}right={<TextInput.Icon icon={!showPass ? "eye" : "eye-off"} onPress={() => setShowPass(!showPass)}/> }style={styles.passwordsettings}/>
      <Button onPress={() => navigation.navigate("Home")}mode="contained" style={styles.LoginButton}>Login</Button>
      <Button onPress={() => navigation.navigate("Register")} mode="contained"style={styles.RegistrationButton}>Register</Button>
      <Button onPress={() => navigation.navigate("Landing")} mode="contained"style={styles.BackButton}>Go back</Button>
      <Button onPress={() => navigation.navigate("Recovery")}mode="contained" style={styles.RecoveryButton}>Forgot Account?</Button>
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
  LoginButton:{
    margin:1,
    textAlign:'center',
    marginTop:50,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:19,
    backgroundColor:'#D5241C',
    borderColor:"black",
    borderWidth:1,
  },
  RecoveryButton:{
    margin:1,
    textAlign:'center',
    marginTop:60,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:19,
    backgroundColor:'grey',
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
BackButton:{
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
  marginBottom:-17
},
  emailsettings:{
  marginTop:-50,
  marginBottom:6,
},

});