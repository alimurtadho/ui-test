// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,

//     TouchableHighlight,
//     Alert,
//     Image,
//     ListView,
//     TouchableOpacity,
//     ImageBackground
// } from 'react-native';
// import {
//     Container,
//     Title,
//     Content,
//     Left,
//     Right,
//     Body,
//     Icon,
//     Accordion,
//     Header,
//     Button,
//     Footer,
//     FooterTab

// } from "native-base";
// import { FormLabel, FormInput, Divider, } from 'react-native-elements';
// import { NavigationActions, createStackNavigator } from 'react-navigation';
// export default class UserListView extends Component {
//     navigateToScreen = (route) => () => {
//         const navigateAction = NavigationActions.navigate({
//             routeName: route
//         });
//         this.props.navigation.dispatch(navigateAction);
//     }
//     constructor(props) {
//         super(props);
//         const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//         this.state = {
//             dataSource: ds.cloneWithRows([
//                 { image: "https://images.unsplash.com/photo-1468777675496-5782faaea55b?ixlib=rb-0.3.5&s=dd0ebc879bb0d3e22fae2bac606652ec&auto=format&fit=crop&w=2553&q=80" },
//                 { image: "https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?ixlib=rb-0.3.5&s=791e2aba9c199eacb3eae3818f438081&auto=format&fit=crop&w=2550&q=80" },
//                 { image: "https://images.unsplash.com/photo-1466065478348-0b967011f8e0?ixlib=rb-0.3.5&s=ede25a1e479f466cecedebd7a438398c&auto=format&fit=crop&w=2544&q=80" },
//                 { image: "https://images.unsplash.com/photo-1467825683276-01f37b99c328?ixlib=rb-0.3.5&s=e8f8e88716e3b42719bd4b9a2c6aad26&auto=format&fit=crop&w=2550&q=80" },
//                 { image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-0.3.5&s=d7b2b117e1b27f2350d5b295c2c5fd97&auto=format&fit=crop&w=2550&q=80" },
//             ]),
//         };
//     }

//     render() {
//         return (
//             <Container>
//                 <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
//                     source={require('../assets/background.jpg')}>
//                      <Header style={{}}>
//                         <Left style={{paddingLeft:10}}>
//                             <Button transparent >
//                             <Icon name='arrow-back' />
//                             </Button>
//                         </Left>
//                         <Body>
//                             <Title>Contact</Title>
//                         </Body>
//                         <Right style={{paddingRight:10}}>
//                             <Button transparent>
//                             <Icon name='menu' />
//                             </Button>
//                         </Right>
//                     </Header>

//                     <ListView enableEmptySections={true}
//                         dataSource={this.state.dataSource}
//                         renderRow={(service) => {
//                             return (
//                                 <View style={styles.box}>
//                                     <Image style={styles.image} source={{ uri: service.image }} />
//                                     <View style={styles.boxContent}>
//                                         <Text style={styles.title}>Title</Text>
//                                         <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
//                                         <View style={styles.buttons}>
//                                             <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
//                                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ok/androidL/30/ffffff' }} />
//                                             </TouchableHighlight>

//                                             <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
//                                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/male-user/win8/30/ffffff' }} />
//                                             </TouchableHighlight>

//                                             <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
//                                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/envelope/p1em/30/ffffff' }} />
//                                             </TouchableHighlight>
//                                         </View>
//                                     </View>
//                                 </View>
//                             )
//                         }} />
//                     <Footer>
//                         <FooterTab>

//                             <Button onPress={this.navigateToScreen('Home')}  //home
//                             vertical > 
//                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/home-page.png' }} />
//                             </Button>

//                             <Button onPress={this.navigateToScreen('DetailsToko')}   //notifikasi
//                                 vertical>
//                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/appointment-reminders.png' }} />
//                             </Button>

//                             <Button onPress={this.navigateToScreen('Promosi')}     //contact
//                                 vertical >
//                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/user-group-man-man.png' }} />
//                             </Button>

//                             <Button onPress={this.navigateToScreen('Profile')} //profile
//                                 vertical >
//                                 <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/user-male-circle.png' }} />
//                             </Button>

//                         </FooterTab>
//                     </Footer>
//                 </ImageBackground>
//             </Container>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     image: {
//         width: 100,
//         height: 100,
//     },
//     box: {
//         padding: 20,
//         marginTop: 5,
//         marginBottom: 5,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//     },
//     boxContent: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         marginLeft: 10,
//     },
//     title: {
//         fontSize: 18,
//         color: "#151515",
//     },
//     description: {
//         fontSize: 15,
//         color: "#646464",
//     },
//     buttons: {
//         flexDirection: 'row',
//     },
//     button: {
//         height: 35,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         width: 50,
//         marginRight: 5,
//         marginTop: 5,
//     },
//     icon: {
//         width: 35,
//         height: 35,
//         alignSelf: 'center'
//     },
//     view: {
//         backgroundColor: "#FF1493",
//     },
//     profile: {
//         backgroundColor: "#1E90FF",
//     },
//     message: {
//         backgroundColor: "#228B22",
//     },
// });
import { NavigationActions, createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    TextInput,
    ListView,

    ImageBackground,

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
export default class ContactsView extends Component {
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
                { icon: "https://bootdey.com/img/Content/avatar/avatar1.png", description: "User 1" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar2.png", description: "User 2" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar3.png", description: "User 3" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar4.png", description: "User 4" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar5.png", description: "User 5" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar6.png", description: "User 6" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar1.png", description: "User 7" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar2.png", description: "User 8" },
                { icon: "https://bootdey.com/img/Content/avatar/avatar3.png", description: "User 9" },
            ]),
        };
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {

        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={require('../assets/background.jpg')}>
                    <Header style={{}}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Button transparent onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Contact</Title>
                        </Body>
                        <Right style={{ paddingRight: 10 }}>
                            <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={styles.container}>
                        <View style={styles.formContent}>
                            <View style={styles.inputContainer}>
                                <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/search/androidL/100/000000' }} />
                                <TextInput style={styles.inputs}
                                    ref={'txtPassword'}
                                    placeholder="Search"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name_address) => this.setState({ name_address })} />
                            </View>
                        </View>

                        <ListView style={styles.notificationList}
                            dataSource={this.state.dataSource}
                            renderRow={(notification) => {
                                return (
                                    <View style={styles.notificationBox}>
                                        <Image style={styles.image}
                                            source={{ uri: notification.icon }} />

                                        <Text style={styles.name}>{notification.description}</Text>
                                    </View>
                                )
                            }} />
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
    },
    notificationBox: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft: 10,
        alignSelf: 'center'
    },
});  