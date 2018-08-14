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
                { image: "https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-0.3.5&s=1501d6a767c87e34f4a8668d70bdd840&auto=format&fit=crop&w=2550&q=80" },
                { image: "https://images.unsplash.com/photo-1471005115083-ccf6e3cca00d?ixlib=rb-0.3.5&s=15e784fd367bb448eabc795c960d8e50&auto=format&fit=crop&w=2550&q=80" },
                { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-0.3.5&s=2c5e8260bb03cfb1c0e301d84cb81bd3&auto=format&fit=crop&w=2550&q=80" },
                { image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-0.3.5&s=effd161124c448aaa02220bb726a0263&auto=format&fit=crop&w=1300&q=80" },
                { image: "https://images.unsplash.com/photo-1486742803979-911419859c18?ixlib=rb-0.3.5&s=b6fc0919e9db0d81739bec68975bb2ac&auto=format&fit=crop&w=934&q=80" },
            ]),
        };
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={{uri : 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b3ea1b8e2cc5a8fd1e3206ad84b8668&auto=format&fit=crop&w=2550&q=80'}}>
                    <Header style={{}}>
                        <Left>
                            
                        </Left>
                        <Body>
                            <Title>History</Title>
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
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/buy/ios/30/ffffff' }} />
                                            </TouchableHighlight>

                                            <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('Login')}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/delivery/ios/30/ffffff' }} />
                                            </TouchableHighlight>

                                            <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/location/maps/30/ffffff' }} />
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
