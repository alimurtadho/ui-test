import { StackNavigator } from 'react-navigation';
import SignUp from './SignUp';
import Login from './Login';
import Forgotpassword from './Forgotpassword';
import Profile from '../Toko/Profile';
import Home from '../Toko/Home';
import Menu from '../Toko/Menu';
import Promosi from '../Toko/Promosi';

export default TabHome = TabNavigator({

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
    }
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
        
    });