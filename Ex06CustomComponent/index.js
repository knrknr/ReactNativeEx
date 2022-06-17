/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import main from './main'

AppRegistry.registerComponent(appName, () => main);
