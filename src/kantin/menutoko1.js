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
    FooterTab,
    Item,
    Input,


} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationActions, createStackNavigator, DrawerActions } from 'react-navigation';
// this.props.navigation.dispatch(DrawerActions.closeDrawer());
// this.props.navigation.dispatch(DrawerActions.openDrawer());
export default class UserListView extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    constructor(props) {
        super(props);
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }


    render() {
        console.log(this.props)
        return (
            <Container>
                <Grid >
                    <Col style={{}}>
                        <Row style={{ backgroundColor: 'white' }}>
                           

                        </Row>
                        <Row style={{ backgroundColor: 'green' }}>
                            <Text>1</Text>
                        </Row>
                    </Col>

                    <Col style={{ backgroundColor: 'grey', }}></Col>
                </Grid>


            </Container>
        );
    }
}

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
        width: 35,
        height: 35,
        alignSelf: 'center'
    }
}); 