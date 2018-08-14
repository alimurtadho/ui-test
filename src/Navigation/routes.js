import React from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import SignUp from '../Login/SignUp';
import Login from '../Login/Login';
import Forgotpassword from '../Login/Forgotpassword';
import Profile from '../Toko/Profile';
import Home from '../Toko/Home';
import Menu from '../Toko/Menu';
import Promosi from '../Toko/Promosi';
import Detailsmenu from '../Toko/Detailsmenu';
import DetailsToko from '../Toko/DetailsToko';
import Sidemenu from './Sidemenu';

navigateToScreen = (route) => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: route
  });
  this.props.navigation.dispatch(navigateAction);
}


export default DrawerNavigator({
  Login: {
    screen: Login
  },

  Menu: {
    screen: Menu
  },
  Home: {
    screen: Home
  },

  Promosi: {
    screen: Promosi
  },
  Profile: {
    screen: Profile
  },
  Detailsmenu: {
    screen: Detailsmenu
  },
  DetailsToko: {
    screen: DetailsToko
  },
  Promosi: {
    screen: Promosi
  },
}, {
    contentComponent: Sidemenu,
    drawerWidth: 300
  });


