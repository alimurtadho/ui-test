import { StackNavigator } from 'react-navigation';
import SignUp from '../Login/SignUp';
import Login from '../Login/Login';
import Forgotpassword from './Forgotpassword';
import Profile from '../Toko/Profile';
import Home from '../Toko/Home';
import Menu from '../Toko/Menu';
import Promosi from '../Toko/Promosi';
import Detailsmenu from '../Toko/Detailsmenu';

export default StackHome = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({

        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({

        })
    },
    Forgotpassword: {
        screen: Forgotpassword,
        navigationOptions: () => ({

        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({

        })
    },
    Home: {
        screen: Home,
        navigationOptions: () => ({

        })
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({

        })
    },
    Promosi: {
        screen: Promosi,
        navigationOptions: () => ({

        })
    },
    Detailsmenu: {
        screen: Detailsmenu,
        navigationOptions: () => ({

        })
    }
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
        
    });