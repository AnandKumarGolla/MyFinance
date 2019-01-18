/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/Login';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';
import AddCustomer from './src/screens/AddCustomer';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AddCustomer);
