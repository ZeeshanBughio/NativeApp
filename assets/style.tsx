import React from 'react-native';
import { StyleSheet } from "react-native";

export var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      height: '100%',
      position: 'relative',
    },
    logo: {
      width: '80%',
      objectFit: 'contain',
    },
    input: {
      width: '80%',
      height: 50,
      borderWidth: 1,
      marginTop: 15,
      paddingHorizontal: 20,
      backgroundColor: '#FFFFFF',
      fontSize: 18,
      borderRadius: 6,
    },
    button: {
      backgroundColor: '#ff5003',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    signupText: {
      color: '#fff',
      fontSize: 18,
    },
    signupLink: {
      color: '#ff5003',
      textDecorationLine: 'none',
    },
    flexingtwobuttons:{
      display: 'flex',
      flexDirection: 'row',
    },
    marginright:{
      marginRight : 10,
    }
});
