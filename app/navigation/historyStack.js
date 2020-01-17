import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookedPujasScreen from '../../screens/history/bookedPujasScreen';
import UpdateBookingScreen from '../../screens/history/updateBookingScreen';

export const HistoryStack = createStackNavigator(
  {
    Home: {
      screen: BookedPujasScreen,
    },
    UpdateBooking: {
      screen: UpdateBookingScreen,
    },
  },
  {
    headerMode: 'none', //TODO: enable this if we need react-navigation header for this stack
    navigationOptions: {
      headerVisible: false,
    },
  },
);
