import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
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

export default class PostView extends Component {

    render() {
        return (
            <Container>
                <Header style={{}}>
                    <Left style={{ paddingLeft: 10 }}>
                        <Button transparent onPress={() => {
                            this.props.navigation.goBack()
                        }} >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Title>Visi Misi</Title>
                    </Body>
                    <Right style={{ paddingRight: 10 }}>
                        <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>
                               Media care
              </Text>
                        </View>

                        <View style={styles.postContent}>
                            <Text style={styles.postTitle}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Text>

                            <Text style={styles.postDescription}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </Text>

                            <Text style={styles.tags}>
                                Lorem, ipsum, dolor, sit, amet, consectetuer, adipiscing, elit.
              </Text>

                            <Text style={styles.date}>
                                2017-11-27 13:03:01
              </Text>

                            <View style={styles.profile}>
                                <Image style={styles.avatar}
                                    source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />

                                <Text style={styles.name}>
                                    Johan Doe
                </Text>
                            </View>
                            <TouchableOpacity style={styles.shareButton}>
                                <Text style={styles.shareButtonText}>Like</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
            alignSelf:'center'
    },
    header: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: "#00BFFF",
    },
    headerTitle: {
        fontSize: 30,
        color: "#FFFFFF",
        marginTop: 10,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    postContent: {
        flex: 1,
        padding: 30,
    },
    postTitle: {
        fontSize: 26,
        fontWeight: '600',
    },
    postDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    tags: {
        color: '#00BFFF',
        marginTop: 10,
    },
    date: {
        color: '#696969',
        marginTop: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#00BFFF",
    },
    profile: {
        flexDirection: 'row',
        marginTop: 20
    },
    name: {
        fontSize: 22,
        color: "#00BFFF",
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 10
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});
