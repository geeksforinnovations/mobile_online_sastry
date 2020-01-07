/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import RootApp from './screens/sidebar/sidebar';

import {StyleProvider} from 'native-base';
// import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import stripe from 'tipsi-stripe';
import Amplify from 'aws-amplify';
import awsconfig from './aws/configure';

Amplify.configure(awsconfig);
stripe.setOptions({
  publishableKey: 'pk_test_T27m5sW3xaVHvlLE9oNSkVLS00fV5eO21h',
  // merchantId: 'MERCHANT_ID', // Optional
  androidPayMode: 'test', // Android only
});
const App: () => React$Node = () => {
  // const the
  return (
    <StyleProvider style={getTheme(material)}>
      <RootApp />
    </StyleProvider>
  );
};
export default App;
