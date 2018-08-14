import React, { Component } from 'react';
import { View, } from 'react-native';
// import { Header, Button, Spinner} from './components/common';
import firebase from 'firebase';
import Login from './Login';



class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAbrxDmO86GuGFDe25Hr40xuEyeZXHuiH8',
            authDomain: 'authentication-b2345.firebaseapp.com',
            databaseURL: 'https://authentication-b2345.firebaseio.com',
            projectId: 'authentication-b2345',
            storageBucket: 'authentication-b2345.appspot.com',
            messagingSenderId: '661131072372'
        });
        firebase.auth().onAuthStateChanged((user) => {
            // this.setState({ loggedIn: user !== null });
            if (user) {
                this.setState({loggedIn: true});
            }else {     
                this.setState({loggedIn: false});
            
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            case false:
                return <Login />;
           
        }
    }
    // renderContent(){
    //     if (this.state.loggedIn){
    //         return(
    //             <Button>
    //                 Log Out
    //                 </Button>
    //         );
    //     }
    //     return <LoginForm/>;
    // }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;