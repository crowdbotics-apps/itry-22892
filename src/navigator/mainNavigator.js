import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps178058Navigator from '../features/Maps178058/navigator';
import Additem178057Navigator from '../features/Additem178057/navigator';
import Maps178053Navigator from '../features/Maps178053/navigator';
import UserProfile178049Navigator from '../features/UserProfile178049/navigator';
import Maps177463Navigator from '../features/Maps177463/navigator';
import Additem177462Navigator from '../features/Additem177462/navigator';
import Maps177458Navigator from '../features/Maps177458/navigator';
import UserProfile177454Navigator from '../features/UserProfile177454/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps178058: { screen: Maps178058Navigator },
Additem178057: { screen: Additem178057Navigator },
Maps178053: { screen: Maps178053Navigator },
UserProfile178049: { screen: UserProfile178049Navigator },
Maps177463: { screen: Maps177463Navigator },
Additem177462: { screen: Additem177462Navigator },
Maps177458: { screen: Maps177458Navigator },
UserProfile177454: { screen: UserProfile177454Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
