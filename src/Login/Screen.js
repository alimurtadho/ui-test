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
import { StyleSheet, ScrollView, ListView, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class screen extends Component {
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
            <Container >
                <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                    <View style={{ flex: 2, }}>
                        <Image source={require('../assets/1.png')}
                            style={{ resizeMode: 'contain', alignSelf: 'center', zIndex: 2, marginTop: 60 }} />

                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ alignSelf: 'center', paddingTop: 15, fontSize: 18, fontFamily: 'Arial' }}>
                            We deliver the best {'\n'}
                            sollution for your medical {'\n'}
                            routine checkup{'\n'}
                        </Text>
                    </View>


                </View>
                <View style={{ flex: 2, paddingTop: 20 }}>
                    <View style={{ paddingVertical: 10 }}>
                        <TouchableOpacity onPress={this.navigateToScreen('Login')}
                            style={{ alignSelf: 'center', }}>
                            <Image source={require('../assets/signin.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <TouchableOpacity onPress={this.navigateToScreen('SignUp')}
                            style={{ alignSelf: 'center', }}>
                            <Image source={require('../assets/signup.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>



            </Container>



        )
    }
};
