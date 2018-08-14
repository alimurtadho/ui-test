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

export default class fishstore extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb929fc7256230456213cf746b16f73d&auto=format&fit=crop&w=934&q=80" },
                { image: "https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79896d89532ce982c53efebba2883a6b&auto=format&fit=crop&w=700&q=60" },
                { image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ec77eae2b7b81c8beab9e87bbd3a01&auto=format&fit=crop&w=2250&q=80" },
                { image: "https://images.unsplash.com/photo-1523813301608-f54a198f6b5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b77895dac2588da7b541a4ba92f11c00&auto=format&fit=crop&w=2167&q=80" },

            ]),
        };
    }

    render() {
        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={require('../assets/toko2.png')}>
                    <Header style={{}}>
                        <Left>

                        </Left>
                        <Body>
                            <Title>Cakdi Store</Title>
                        </Body>
                        <Right>
                            <Button hasText transparent onPress={() => this.props.navigation.navigate('Menu')}>
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/home-filled.png' }} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image style={styles.avatar}
                                source={{ uri: 'https://images.unsplash.com/photo-1475905760530-a22eda0fb1b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d25414c1536ddcfe5e3f03614a645904&auto=format&fit=crop&w=2554&q=80' }} />

                            <Text style={styles.name}>Cak-di </Text>
                            <Text style={styles.userInfo}>cakdi@mail.com </Text>
                            <Text style={styles.userInfo}>Surabaya City</Text>
                        </View>
                    </View>

                    <ListView enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(service) => {
                            return (
                                <View style={styles.box}>
                                    <Image style={styles.image} source={{ uri: service.image }} />
                                    <View style={styles.boxContent}>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                                        <View style={styles.buttons}>
                                            <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ok/androidL/30/ffffff' }} />
                                            </TouchableHighlight>

                                            <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/male-user/win8/30/ffffff' }} />
                                            </TouchableHighlight>

                                            <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/envelope/p1em/30/ffffff' }} />
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            )
                        }} />
                    {/* <Footer>
                        <FooterTab>
                            <Button vertical onPress={this.navigateToScreen('Home')}>
                                <Image source={require('../assets/home.png')}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                              
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Promosi')}>
                                <Image source={require('../assets/kantin.png')}
                                    style={{ width: 25, height: 25, alignSelf: 'center' }} />
                               
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Menu')}>
                                <Image source={require('../assets/topup.png')}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                               
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Profile')}>
                                <Image source={require('../assets/user.png')}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                               
                            </Button>
                        </FooterTab>
                    </Footer> */}
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
        width: 200,
        height: 120,
        borderRadius: 20,
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
        color: "#000000",
        fontWeight: '600',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius:10
    },
    box: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    boxContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#151515",
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 50,
        marginRight: 5,
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 20,
      
    },
    view: {
        backgroundColor: "#FF1493",
    },
    profile: {
        backgroundColor: "#1E90FF",
    },
    message: {
        backgroundColor: "#228B22",
    },
});