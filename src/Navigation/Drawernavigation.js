import {DrawerNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Forgotpassword from '../Login/Forgotpassword';
import Profile from '../Toko/Profile';
import Home from '../Toko/Home';
import Menu from '../Toko/Menu';
import Promosi from '../Toko/Promosi';
import SideMenu from './SideMenu';
export default DrawerNavigator({
  Promosi: {
    screen: Promosi
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
