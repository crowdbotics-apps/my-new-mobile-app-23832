import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0192679Navigator from '../features/BlankScreen0192679/navigator';
import CbSplashScreen2193302Navigator from '../features/CbSplashScreen2193302/navigator';
import OnboardingSlideScreen3193301Navigator from '../features/OnboardingSlideScreen3193301/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0192679: { screen: BlankScreen0192679Navigator }, CbSplashScreen2193302: { screen: CbSplashScreen2193302Navigator }, OnboardingSlideScreen3193301: { screen: OnboardingSlideScreen3193301Navigator },

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
    contentComponent: SideMenu,
    initialRouteName: "CbSplashScreen2193302", // Splash Screen
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
