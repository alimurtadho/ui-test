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
import { FormLabel, FormInput, } from 'react-native-elements';
import { NavigationActions, createStackNavigator } from 'react-navigation';

export default class Forgotpassword extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login',

        });
        this.props.navigation.dispatch(navigateAction);
    }
    static navigationOptions = {

    }
    state = {
        name: '',
        password: '',
        message: '',
    }

    updateFormInput = (type, value) => {
        this.setState({
            [type]: value,
        });
    }

    sendMessage = () => {
        this.setState({
            name: '',
            password: '',
            message: '',
        })
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
                    <View style={{ flex: 3, paddingTop: 45 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/envelope/androidL/40/3498db' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent' />

                            </View>
                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent' />

                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Verify Password "
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent' />
                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', paddingTop: 20 }}>
                            <Button block info onPress = {() => alert('Verify succes.!')}
                                style={{ width: 280, height: 40 }}>
                                <Text>OK</Text>
                            </Button>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.navigateToScreen('Login')}
                                style={{ alignSelf: 'flex-end', paddingTop: 20, paddingRight: 50 }}>
                                <Text style={styles.underline}>Already have an account? Login</Text>
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
        fontSize: 20
    },
    white: {
        color: '#9DA3A3',

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
});
Forgotpassword.propTypes = {
    navigation: Forgotpassword.object
};