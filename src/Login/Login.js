import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Text,
    View,

} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, ImageBackground, Label, Input, Form, Item
} from 'react-native';
import { FormLabel, FormInput, Divider } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';;
// import firebase from 'firebase';
import SignUp from "./SignUp";


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

        // this.onButtonPress = this.onButtonPress.bind(this);
    }


    onButtonPress() {
        console.log(this.state)
        const { email, password } = this.state;

        this.setState({ loading: true });

        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(this.onLoginSuccess.bind(this))
        //     .catch(() => {
        //         firebase
        //             .auth()
        //             .createUserWithEmailAndPassword(email, password)
        //             .then(this.onLoginSuccess.bind(this))
        //             .catch(this.onLoginFail.bind(this));
        //     });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });

        // menuju ke menu dan reset stack

        // this.navigateToScreen('Menu')
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainMenu' })]
        })

        this.props.navigation.dispatch(resetAction)
    }


    onLoginFail(message) {
        this.setState({
            loading: false,
            error: message.toString()
        });
    }

    // componentWillMount() {
    //     firebase.initializeApp({
    //         apiKey: 'AIzaSyAbrxDmO86GuGFDe25Hr40xuEyeZXHuiH8',
    //         authDomain: 'authentication-b2345.firebaseapp.com',
    //         databaseURL: 'https://authentication-b2345.firebaseio.com',
    //         projectId: 'authentication-b2345',
    //         storageBucket: 'authentication-b2345.appspot.com',
    //         messagingSenderId: '661131072372'
    //     });

       
    //     firebase.auth().onAuthStateChanged((user) => {
    //         // this.setState({ loggedIn: user !== null });
    //         if (user) {
    //             this.setState({ loggedIn: true });
    //         } else {
    //             this.setState({ loggedIn: false });

    //         }
    //     });
    // }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            case false:
                return <SignUp />;

        }
    }


    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    static navigationOptions = {

    }


    render() {
        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={require('../assets/background.jpg')}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{}}>
                            <Image source={require('../assets/1.png')}
                                style={{ width: 200, height: 160, alignSelf: 'center', marginTop: 60 }} />

                        </View>
                    </View>
                    <View style={{ flex: 2, paddingTop: 20 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/email/androidL/40/3498db' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="email"
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent' />

                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent' />

                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', paddingTop: 20 }}>
                            <Button block info onPress={this.onButtonPress.bind(this)}
                                onPress={() => {
                                    // this.navigateToScreen('Menu')
                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'MainMenu'})]
                                    })

                                    this.props.navigation.dispatch(resetAction)
                                }}
                                style={{ width: 280, height: 40 }}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.navigateToScreen('SignUp')}
                                style={{ alignSelf: 'center', paddingTop: 20, }}>
                                <Text style={{}}>Don't have an account? </Text>
                                <Text style={styles.underline}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.navigateToScreen('Forgotpassword')}
                                style={{ alignSelf: 'flex-end', paddingTop: 40, paddingRight: 50 }}>
                                <Text style={styles.underline}>Forgot Password</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>
            </Container>
        )
    }
};
const styles = StyleSheet.create({
    bigblue: {
        color: 'white',
        fontSize: 25,
    },
    underline:
    {
        textDecorationLine: 'underline',
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 10
    },
    white: {
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 280,
        height: 40,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginHorizontal: 10,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    icon: {
        width: 20,
        height: 20,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        width: 200
    }
});
Login.propTypes = {
    navigation: Login.object
};