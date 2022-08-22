import React from 'react';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import {
    Colors,
    BottomMenuIcon
} from './../components/styles'
const {lightGreen, black, white, grey, darkGray} = Colors;


// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
// screens
import StartScreen from './../screens/StartScreen';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Profile from './../screens/Profile';
import Settings from './../screens/Settings';
import EditProfile from './../screens/EditProfile';
import BottomMenu from './../screens/BottomMenu';
import SignupProfileStart from './../screens/SignupProfileStart';
import SignupProfileSettings from './../screens/SignupProfileSettings';



const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();


function SubMenu() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: {white},
            tabBarInactiveTintColor: {darkGray},
            tabBarLabelStyle: { 
                textAlign: 'center',
                fontSize: 15,
                textTransform: 'none',
            },
            tabBarIndicatorStyle: {
              borderBottomColor: {white},
              borderBottomWidth: 2,
            },
            tabBarStyle: { backgroundColor: {black} },
          }}
        >
            <Tab.Screen name="All" component={SignupProfileStart} />
            <Tab.Screen name="Weekly" component={Profile} />
            <Tab.Screen name="Monthly" component={Profile} />
            <Tab.Screen name="Yearly" component={Profile} />
        </Tab.Navigator>
    );
}

function ProfileMenu() {
    return (
    <>
        <Profile/>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: {white},
                tabBarInactiveTintColor: {darkGray},
                tabBarLabelStyle: { 
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                  borderBottomColor: {lightGreen},
                  borderBottomWidth: 2,
                },
                tabBarStyle: { 
                    backgroundColor: {white}, 
                    height:70,
                    marginTop: -10,
                    paddingTop: 0,
                },

              }}       
        >
            <Tab.Screen name="Karma" component={SubMenu}
                options={{ tabBarIcon: ({ color }) => (
                        <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/KarmaRun.png')}/>
                    ),
                }} 
            />
            <Tab.Screen name="Part of.." component={Profile} 
                options={{ tabBarIcon: ({ color }) => (
                        <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/KarmaRun.png')}/>
                    ),
                }}             
            />
            <Tab.Screen name="Pictures" component={Profile} 
                options={{ tabBarIcon: ({ color }) => (
                        <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/KarmaRun.png')}/>
                    ),
                }}             
            />
            <Tab.Screen name="People" component={Profile} 
                options={{ tabBarIcon: ({ color }) => (
                        <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/KarmaRun.png')}/>
                    ),
                }}             
            />
        </Tab.Navigator>
    </>
    );
}

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: lightGreen,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="StartScreen"
            >
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Profile" component={ProfileMenu} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="BottomMenu" component={BottomMenu} />
                <Stack.Screen name="SignupProfileStart" component={SignupProfileStart} />
                <Stack.Screen name="SignupProfileSettings" component={SignupProfileSettings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootStack;