// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Button, Alert } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './LoginScreens/LoginScreen';
// import DrawerStackNav from './Navigations/DrawerStackNav';
// import BottomStackNav from './Navigations/BottomStackNav';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userType, setUserType] = useState('');

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     try {
//       const value = await AsyncStorage.getItem('isLoggedIn');
//       if (value !== null && value === 'true') {
//         setIsLoggedIn(true);
//         const storedUserType = await AsyncStorage.getItem('userType');
//         setUserType(storedUserType as string);
//       }
//     } catch (error) {
//       console.log('Error retrieving login status:', error);
//     }
//   };

//   const handleLogin = async (email: string, password: string) => {
//     const adminUser = {
//       email: 'zeeshan@gmail.com',
//       password: 'iamzeeshan007',
//     };

//     const regularUser = {
//       email: 'jamshed@gmail.com',
//       password: 'iamjamshed123',
//     };

//     if (email === adminUser.email && password === adminUser.password) {
//       setIsLoggedIn(true);
//       setUserType('admin');
//       try {
//         await AsyncStorage.setItem('isLoggedIn', 'true');
//         await AsyncStorage.setItem('userType', 'admin');
//       } catch (error) {
//         console.log('Error saving login status:', error);
//       }
//     } else if (email === regularUser.email && password === regularUser.password) {
//       setIsLoggedIn(true);
//       setUserType('user');
//       try {
//         await AsyncStorage.setItem('isLoggedIn', 'true');
//         await AsyncStorage.setItem('userType', 'user');
//       } catch (error) {
//         console.log('Error saving login status:', error);
//       }
//     } else {
//       Alert.alert('Invalid credentials');
//     }
//   };

//   const handleLogout = async () => {
//     setIsLoggedIn(false);
//     setUserType('');
//     try {
//       await AsyncStorage.setItem('isLoggedIn', 'false');
//       await AsyncStorage.removeItem('userType');
//     } catch (error) {
//       console.log('Error saving login status:', error);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isLoggedIn ? (
//           userType === 'admin' ? (
//             <Stack.Screen
//               name="Admin"
//               component={BottomStackNav}
//               options={{ headerRight: () => <Button title="Logout" onPress={handleLogout} /> }}
//             />
//           ) : (
//             <Stack.Screen
//               name="User"
//               component={DrawerStackNav}
//               options={{ headerRight: () => <Button title="Logout" onPress={handleLogout} /> }}
//             />
//           )
//         ) : (
//           <Stack.Screen
//             name="Login"
//             component={() => <LoginScreen handleLogin={handleLogin} />}
//             options={{ headerShown: false }}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// app.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreens/LoginScreen';
import SignupScreen from './LoginScreens/SignupScreen';
import DrawerStackNav from './Navigations/DrawerStackNav';
import BottomStackNav from './Navigations/BottomStackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

// const getAllUserData = async () => {
//   try {
//     const userData = await AsyncStorage.getItem('userData');
//     if (userData) {
//       const users = JSON.parse(userData);
//       console.log(users);
//     } else {
//       console.log('No user data found.');
//     }
//   } catch (error) {
//     console.log('Error retrieving user data:', error);
//   }
// };

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [showSignup, setShowSignup] = useState(false);

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
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      const users = JSON.parse(userData);
      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password === password
      );
      if (user) {
        setIsLoggedIn(true);
        setUserType(user.role);
        try {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          await AsyncStorage.setItem('userType', user.role);
        } catch (error) {
          console.log('Error saving login status:', error);
        }
      } else {
        Alert.alert('Invalid credentials');
      }
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleSignup = async (email: string, password: string, role: string) => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      const users = JSON.parse(userData);
      const userExists = users.some(
        (u: { email: string }) => u.email === email
      );
      if (userExists) {
        Alert.alert('Email already exists. Please choose a different email.');
        return;
      }
      users.push({ email, password, role });
      await AsyncStorage.setItem('userData', JSON.stringify(users));
    } else {
      const newUser = [{ email, password, role }];
      await AsyncStorage.setItem('userData', JSON.stringify(newUser));
    }
    setShowSignup(false);
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
        ) : showSignup ? (
          <Stack.Screen
            name="Signup"
            component={() => <SignupScreen handleSignup={handleSignup} setShowSignup={setShowSignup} />}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={() => <LoginScreen handleLogin={handleLogin} setShowSignup={setShowSignup} />}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

