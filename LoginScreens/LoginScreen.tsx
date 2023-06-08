import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Styles} from '../assets/style'

type handleLogin = (username: string, password: string) => void;

const LoginScreen = ({ handleLogin }: { handleLogin: handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    handleLogin(email, password);
  };

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={onLoginPress} style={Styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

