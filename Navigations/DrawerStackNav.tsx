import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import BottomStackNav from './BottomStackNav'

const DrawerStack = createDrawerNavigator()

function DrawerStackNav() {
    return (
        <DrawerStack.Navigator useLegacyImplementation
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#f4511e',
                    width: 250,
                },
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >

            <DrawerStack.Screen
                name='Home Screen'
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    drawerLabelStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <DrawerStack.Screen
                name='Notifications Screen'
                component={NotificationsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    drawerLabelStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            {/* <DrawerStack.Screen
                name='Profile Screen'
                component={ProfileScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e', // Set Header color
                    },
                    headerTintColor: '#fff', // Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', // Set Header text font weight to bold
                    },
                    drawerActiveTintColor: '#fff', // Set Drawer active tint color to white
                    drawerInactiveTintColor: '#fff', // Set Drawer inactive tint color to white
                    drawerLabelStyle: {
                        fontWeight: 'bold', // Set Drawer link text font weight to bold
                    },
                }}
            />

            <DrawerStack.Screen
                name='Setting Screen'
                component={SettingScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e', // Set Header color
                    },
                    headerTintColor: '#fff', // Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', // Set Header text font weight to bold
                    },
                    drawerActiveTintColor: '#fff', // Set Drawer active tint color to white
                    drawerInactiveTintColor: '#fff', // Set Drawer inactive tint color to white
                    drawerLabelStyle: {
                        fontWeight: 'bold', // Set Drawer link text font weight to bold
                    },
                }}
            /> */}

        </DrawerStack.Navigator>
    )
}

export default DrawerStackNav;

