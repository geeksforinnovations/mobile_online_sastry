/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PujaDetails from './screens/pujaDetails/pujaDetails'
import SideBar from './screens/sidebar/sidebar';
// import App from './App'
import 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => App);
