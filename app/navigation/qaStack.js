import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HowWorksScreen from '../../screens/QA/howWorksScreen';

export const HowWorksStack = createStackNavigator(
  {
    Home: {
      screen: HowWorksScreen,
    },
  },
  {
    headerMode: 'none', //TODO: enable this if we need react-navigation header for this stack
    navigationOptions: {
      headerVisible: false,
    },
  },
);
