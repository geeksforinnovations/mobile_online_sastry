import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SettingsScreen from '../../screens/settings/settingsScreen';

export const SettingsStack = createStackNavigator(
  {
    Home: {
      screen: SettingsScreen,
    },
  },
  {
    headerMode: 'none', //TODO: enable this if we need react-navigation header for this stack
    navigationOptions: {
      headerVisible: false,
    },
  },
);
