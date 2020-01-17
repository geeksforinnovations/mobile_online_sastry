import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Pujas from '../pujas/pujas';
import PujaDetails from '../pujaDetails/pujaDetails';
import CustomSideBar from './customSidebar';
import {Icon} from 'native-base';
import {HomeStack} from '../../app/navigation/homeStack';
import {HistoryStack} from '../../app/navigation/historyStack';
import {HowWorksStack} from '../../app/navigation/qaStack';
import {SettingsStack} from '../../app/navigation/settingsStack';

const MyDrawerNavigator = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Pujas',
        drawerIcon: ({tintColor}) => <Icon type="FontAwesome" name="home" />,
      },
    },
    HistoryStack: {
      screen: HistoryStack,
      navigationOptions: {
        drawerLabel: 'History',
        drawerIcon: ({tintColor}) => <Icon type="FontAwesome" name="history" />,
      },
    },
    SettingsStack: {
      screen: SettingsStack,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: ({tintColor}) => <Icon type="FontAwesome" name="cogs" />,
      },
    },
    // HelpStack: {
    //   screen: PujaDetails,
    //   navigationOptions: {
    //     drawerLabel: 'Help',
    //     drawerIcon: ({tintColor}) => (
    //       <Icon type="FontAwesome" name="question" />
    //     ),
    //   },
    // },
    // AboutUsStack: {
    //   screen: PujaDetails,
    //   navigationOptions: {
    //     drawerLabel: 'About Us',
    //     drawerIcon: ({tintColor}) => (
    //       <Icon type="FontAwesome" name="address-card" />
    //     ),
    //   },
    // },
    HowWorksStack: {
      screen: HowWorksStack,
      navigationOptions: {
        drawerLabel: 'How it works',
        drawerIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="address-card" />
        ),
      },
    },

    LogoutStack: {
      screen: Pujas,
      navigationOptions: {
        drawerLabel: 'Logout',
        drawerIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="power-off" />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeStack',
    contentComponent: CustomSideBar,
  },
);

const RootApp = createAppContainer(MyDrawerNavigator);
export default RootApp;
