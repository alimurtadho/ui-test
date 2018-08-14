import React from "react";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";
import { StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

import DrawerContent from "../views/Sidebar"

import Profile from '../views/Profile';
import Extra from '../views/Extra';

import SignIn from '../views/SignIn';

import Home from '../views/Home';
import Info from '../views/Info';
import Logout from '../views/Logout';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  Logout: {
    screen: Logout,
  },
  Extra: {
    screen: Extra,
  },
}, {
    contentComponent: DrawerContent,

    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  });

export const SignedIn = TabNavigator({
  Home: {
    screen: Drawer,


  },
  Profile: {
    screen: Profile,
    navigationOptions: {
    
    }
  },
  Extra: {
    screen: Extra,
  },

},);

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      
    }
  },
});

export const RootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    }, {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};