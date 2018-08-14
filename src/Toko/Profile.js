import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import {
  Container,
  Title,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Accordion,
  Header,
  Button,
  Footer,
  FooterTab

} from "native-base";

import { FormLabel, FormInput, Divider, } from 'react-native-elements';
import { NavigationActions, createStackNavigator } from 'react-navigation';
export default class UserProfileView extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container>
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
          source={require('../assets/1.png')}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

                <Text style={styles.name}>Ali Murtadho </Text>
                <Text style={styles.userInfo}>ali@.com </Text>
                <Text style={styles.userInfo}>Surabaya City</Text>
              </View>
            </View>
            

            <View style={styles.body}>
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/home-filled.png' }} />
                </View>
                <View style={styles.infoContent}>
                  <Button vertical transparent onPress={this.navigateToScreen('Menu')}>
                    <Text style={styles.info}>Home</Text>
                  </Button>
                </View>
              </View>



              
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/settings-filled.png' }} />
                </View>
                <View style={styles.infoContent}>
                  <Button vertical transparent onPress={this.navigateToScreen('Login')}>
                    <Text style={styles.info}>Settings</Text>
                  </Button>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/export-filled.png' }} />
                </View>
                <View style={styles.infoContent}>
                  <Button vertical transparent onPress={this.navigateToScreen('Login')}>
                    <Text style={styles.info}>Logout</Text>
                  </Button>
                </View>
              </View>

            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {

  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {

    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
    color: "black"
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "black",
  }
});
