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
                { image: "https://images.unsplash.com/photo-1468777675496-5782faaea55b?ixlib=rb-0.3.5&s=dd0ebc879bb0d3e22fae2bac606652ec&auto=format&fit=crop&w=2553&q=80" },
                { image: "https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?ixlib=rb-0.3.5&s=791e2aba9c199eacb3eae3818f438081&auto=format&fit=crop&w=2550&q=80" },
                { image: "https://images.unsplash.com/photo-1466065478348-0b967011f8e0?ixlib=rb-0.3.5&s=ede25a1e479f466cecedebd7a438398c&auto=format&fit=crop&w=2544&q=80" },
                { image: "https://images.unsplash.com/photo-1467825683276-01f37b99c328?ixlib=rb-0.3.5&s=e8f8e88716e3b42719bd4b9a2c6aad26&auto=format&fit=crop&w=2550&q=80" },
                { image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-0.3.5&s=d7b2b117e1b27f2350d5b295c2c5fd97&auto=format&fit=crop&w=2550&q=80" },
            ]),
        };
    }

    render() {
        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={require('../assets/background.jpg')}>
                    <Header style={{}}>
                        <Left>
                            <Button hasText transparent>
                                <Text>Back</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Title>Promosi</Title>
                        </Body>
                        <Right>
                            <Button hasText transparent>
                                <Text>Cancel</Text>
                            </Button>
                        </Right>
                    </Header>

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
    image: {
        width: 100,
        height: 100,
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
