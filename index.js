/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import HelloRn from './src/test/HelloRN'
import FlexTest from './src/test/FlexTest'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexTest);
