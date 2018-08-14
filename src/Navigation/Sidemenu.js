/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, ListView, Grid, Col, ImageBackground } from 'react-native';
// import styles from './Sidemenu.style';
import { Button, ListItem, List, Icon } from 'native-base';
// import { } from 'react-native-elements';
import UserListView from '../Toko/Menu';
import { } from 'react-native-elements';
// import firebase from 'firebase';
// import SignUp from '../Login/SignUp';
// import Login from '../Login/Login';
// import Forgotpassword from './Login/Forgotpassword';
// import Profile from './Toko/Profile';
// import Home from './Toko/Home';
// import Menu from './Toko/Menu';
// import Promosi from './Toko/Promosi';



class Sidemenu extends Component {
  // componentWillMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.navigateToScreen('Home');
  //     } else {
  //       this.navigateToScreen('Login');
  //     }
  //   })
  // }
  // signOutUser = async () => {
  //   try {
  //     await firebase.auth().signOut();
  //     this.navigateToScreen('Login');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
        source={require('../assets/1.png')}>
        <View style={styles.container}>

          <View style={{ backgroundColor: "#DCDCDC", }
          }>
            <View style={{
              padding: 10,
              alignItems: 'center',
            }}>
              <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
                <Image style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 4,
                  borderColor: "white",
                  marginBottom: 10,
                }}
                  source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
              </TouchableOpacity>
              <Text style={{
                fontSize: 22,
                color: "#000000",
                fontWeight: '600',
              }}>My profile</Text>
            </View>

          </View>
          <ScrollView>
            <List>
              <ListItem>

                <View style={styles.navSectionStyle}>
                  <Button transparent style={{ paddingLeft: 10, }} onPress={this.navigateToScreen('Home')}>
                    <Image style={{ width: 30, height: 30, backgroundColor: 'grey', borderRadius: 10 }} source={{ uri: 'https://png.icons8.com/home/win8/100/ffffff' }} />
                    <Text style={styles.navItemStyle}>Home</Text>
                  </Button>
                </View>
              </ListItem>

              <ListItem>
                <View style={styles.navSectionStyle}>
                  <Button transparent style={{ paddingLeft: 10, }} onPress={this.navigateToScreen('DetailsToko')}>
                    <Image style={{ width: 30, height: 30, backgroundColor: 'grey', borderRadius: 10 }} source={{ uri: 'https://png.icons8.com/notification/win8/100/ffffff' }} />
                    <Text style={styles.navItemStyle}>Notifikasi</Text>
                  </Button>
                </View>
              </ListItem>

              <ListItem>
                <View style={styles.navSectionStyle}>
                  <Button transparent style={{ paddingLeft: 10, }} onPress={this.navigateToScreen('Detailsmenu')}>
                    <Image style={{ width: 30, height: 30, backgroundColor: 'grey', borderRadius: 10 }} source={{ uri: 'https://png.icons8.com/ios/50/000000/handshake-heart.png' }} />
                    <Text style={styles.navItemStyle}>Appoitment</Text>
                  </Button>
                </View>
              </ListItem>
              <ListItem>
                <View style={styles.navSectionStyle}>
                  <Button transparent style={{ paddingLeft: 10, }} onPress={this.navigateToScreen('Promosi')} >
                    <Image style={{ width: 30, height: 30, backgroundColor: 'grey', borderRadius: 10 }} source={{ uri: 'https://png.icons8.com/contact/win8/100/ffffff' }} />
                    <Text style={styles.navItemStyle}>Contact</Text>
                  </Button>
                </View>
              </ListItem>
            </List>

          </ScrollView >



          <View style={styles.footerContainer}>
            <Button transparent  style={{ paddingLeft: 10, }} onPress={this.navigateToScreen('Login')}>
              <Image style={{ width: 30, height: 30, }} source={{ uri: 'https://png.icons8.com/logout/win8/100/ffffff' }} />
              <Text style={styles.navItemStyle}>Log-Out</Text>
            </Button>
          </View>
        </View >
      </ImageBackground>
    );
  }
}

Sidemenu.propTypes = {
  navigation: PropTypes.object
};

export default Sidemenu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  navItemStyle: {
    padding: 10,

  },

  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});
