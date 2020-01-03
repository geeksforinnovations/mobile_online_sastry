import React from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Pujas from '../pujas/pujas';
import PujaDetails from '../pujaDetails/pujaDetails';
import CustomSideBar from './customSidebar';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { HomeStack } from '../../app/navigation/homeStack';


const MyDrawerNavigator = createDrawerNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Pujas',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="home" />

            ),
        }
    },
    HistoryStack:{
        screen: PujaDetails,
        navigationOptions: {
            drawerLabel: 'History',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="history" />

            ),
        }
    },
    SettingsStack:{
        screen: PujaDetails,
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="cogs" />

            ),
        }
    },
    HelpStack:{
        screen: PujaDetails,
        navigationOptions: {
            drawerLabel: 'Help',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="question" />

            ),
        }
    },
    AboutUsStack:{
        screen: PujaDetails,
        navigationOptions: {
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="address-card" />

            ),
        }
    },

   
    LogoutStack: {
        screen: Pujas,
        navigationOptions: {
            drawerLabel: 'Logout',
            drawerIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="power-off" />

            ),
        }
    }
},
    {
        initialRouteName:'HomeStack',
        contentComponent: CustomSideBar,
    }
);

const RootApp = createAppContainer(MyDrawerNavigator)
export default RootApp