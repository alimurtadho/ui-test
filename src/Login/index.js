import { StackNavigator, TabNavigator, DrawerNavigator,TabBarBottom } from 'react-navigation';
import SignUp from './SignUp';
import Login from './Login';
import Forgotpassword from './Forgotpassword';
import Profile from '../Toko/Profile';
import Home from '../Toko/Home';
import Menu from '../Toko/Menu';
import Promosi from '../Toko/Promosi';
import Detailsmenu from '../Toko/Detailsmenu';
import DetailsToko from '../Toko/DetailsToko';
import routes from '../Navigation/routes';
import Sidemenu from '../Navigation/Sidemenu';
import fishstore from '../Detailtoko/fishstore';
import fruitstore from '../Detailtoko/fruitstore';
import herbalstore from '../Detailtoko/herbalstore';
import donutstore from '../Detailtoko/donutstore';
import cakdistore from '../Detailtoko/cakdistore';
import menutoko1 from '../kantin/menutoko1';

import Screen from './Screen';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    Image,
    ListView,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Linking
} from 'react-native';
// this.props.navigation.dispatch(DrawerActions.closeDrawer());
// this.props.navigation.dispatch(DrawerActions.openDrawer());



const MainMenu = DrawerNavigator({
    
    Home: {
        screen: Home
    },
    Menu: {
        screen: Menu
    },
    
    Promosi: {
        screen: Promosi,
        navigationOptions: () => ({

        })
    },
    Detailsmenu: {
        screen: Detailsmenu,
        navigationOptions: () => ({

        })
    },
    DetailsToko: {
        screen: DetailsToko,
        navigationOptions: () => ({

        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({

        })
    },
}, 
     {
        contentComponent: Sidemenu,
        drawerWidth: 300,
   
    });

// export const MainMenu = TabNavigator({


//     Menu: {
//         screen: Menu,
//         navigationOptions: () => ({
//             tabBarIcon: ({ tintColor }) => {
//                 return (
//                     <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/online-store-filled.png' }} />
//                 );
//             }
//         })
//     },

//     Home: {
//         screen: Home,
//         navigationOptions: () => ({
//             tabBarIcon: ({ tintColor }) => {
//                 return (
//                     <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/home-filled.png' }} />
//                 );
//             }
//         })
//     },
//     Profile: {
//         screen: Profile,
//         navigationOptions: () => ({
//             tabBarIcon: ({ tintColor }) => {
//                 return (
//                     <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/user-male-circle-filled.png' }} />
//                 );
//             }
//         })
//     }
// }, {
       
//     tabBarOptions: {
//         activeTintColor: 'dodgerblue',
//         showLabel: false
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',

//     });

export default StackHome = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({

        })
    },
    Screen: {
        screen: Screen,
        navigationOptions: () => ({

        })
    },
    MainMenu: {
        screen: MainMenu,
        navigationOptions: () => ({

        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({

        })
    },
    Forgotpassword: {
        screen: Forgotpassword,
        navigationOptions: () => ({

        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({

        })
    },
    Home: {
        screen: Home,
        navigationOptions: () => ({

        })
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({

        })
    },
    Promosi: {
        screen: Promosi,
        navigationOptions: () => ({

        })
    },
    Detailsmenu: {
        screen: Detailsmenu,
        navigationOptions: () => ({

        })
    },
    DetailsToko: {
        screen: DetailsToko,
        navigationOptions: () => ({

        })
    },
    routes: {
        screen: routes,
        navigationOptions: () => ({

        })
    },
    Sidemenu: {
        screen: Sidemenu,
        navigationOptions: () => ({

        })
    },
    cakdistore: {
        screen: cakdistore,
        navigationOptions: () => ({

        })
    },
    herbalstore: {
        screen: herbalstore,
        navigationOptions: () => ({

        })
    },
    fruitstore: {
        screen: fruitstore,
        navigationOptions: () => ({

        })
    },
    fishstore: {
        screen: fishstore,
        navigationOptions: () => ({

        })
        
    },
    donutstore: {
        screen: donutstore,
        navigationOptions: () => ({

        })
    },
    menutoko1: {
        screen: menutoko1,
        navigationOptions: () => ({

        })
    },



},
    {
        headerMode: 'none',
        initialRouteName: 'Screen'

    });

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
    box: {
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        paddingTop: 10,
        borderRadius: 20
    },
    profileImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },

    },
    name: {
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 10,
        alignSelf: 'center'
    },

    button: {
        width: 60,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: .8,
        shadowOffset: {
            height: 2,
            width: -2
        },
        elevation: 4,
    },
    buttonphone: {
        backgroundColor: "#00BFFF",
    },
    buttonLike: {
        backgroundColor: "#228B22",
    },
    buttonLove: {
        backgroundColor: "#FF1493",
    },
    buttonCall: {
        backgroundColor: "#40E0D0",
    },
    icon: {
        width: 28,
        height: 28,
        alignSelf: 'center'

    }
}); 