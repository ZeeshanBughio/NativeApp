import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreens/LoginScreen';
import DrawerStackNav from './Navigations/DrawerStackNav';
import BottomStackNav from './Navigations/BottomStackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null && value === 'true') {
        setIsLoggedIn(true);
        const storedUserType = await AsyncStorage.getItem('userType');
        setUserType(storedUserType as string);
      }
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    const adminUser = {
      email: 'zeeshan@gmail.com',
      password: 'iamzeeshan007',
    };

    const regularUser = {
      email: 'jamshed@gmail.com',
      password: 'iamjamshed123',
    };

    if (email === adminUser.email && password === adminUser.password) {
      setIsLoggedIn(true);
      setUserType('admin');
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userType', 'admin');
      } catch (error) {
        console.log('Error saving login status:', error);
      }
    } else if (email === regularUser.email && password === regularUser.password) {
      setIsLoggedIn(true);
      setUserType('user');
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userType', 'user');
      } catch (error) {
        console.log('Error saving login status:', error);
      }
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    setUserType('');
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      await AsyncStorage.removeItem('userType');
    } catch (error) {
      console.log('Error saving login status:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          userType === 'admin' ? (
            <Stack.Screen
              name="Admin"
              component={BottomStackNav}
              options={{ headerRight: () => <Button title="Logout" onPress={handleLogout} /> }}
            />
          ) : (
            <Stack.Screen
              name="User"
              component={DrawerStackNav}
              options={{ headerRight: () => <Button title="Logout" onPress={handleLogout} /> }}
            />
          )
        ) : (
          <Stack.Screen
            name="Login"
            component={() => <LoginScreen handleLogin={handleLogin} />}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

