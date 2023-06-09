// LoginScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../assets/style';

type HandleLogin = (email: string, password: string) => void;

const LoginScreen = ({ handleLogin, setShowSignup }: { handleLogin: HandleLogin, setShowSignup: Function }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    handleLogin(email, password);
  };

  const onSignupPress = () => {
    setShowSignup(true);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/croxpertz/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={onLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignupPress}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

