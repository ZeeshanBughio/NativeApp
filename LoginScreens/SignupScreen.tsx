// SignupScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { styles } from '../assets/style';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HandleSignup = (email: string, password: string, role: string) => void;

const SignupScreen = ({ handleSignup, setShowSignup }: { handleSignup: HandleSignup, setShowSignup: Function }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const onSignupPress = () => {
        handleSignup(email, password, role);
    };

    const onBackToSignInPress = () => {
        setShowSignup(false);
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
      <TextInput
        style={styles.input}
        placeholder="Role (admin/user)"
        onChangeText={(text) => setRole(text)}
      />
      <View style={styles.flexingtwobuttons}>
        <TouchableOpacity style={[styles.button,styles.marginright]} onPress={onBackToSignInPress}>
            <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={onSignupPress}>
            <Text style={styles.buttonText} >Sign Up</Text>
        </TouchableOpacity>
      </View>
      
    </View >
  );
};

export default SignupScreen;
