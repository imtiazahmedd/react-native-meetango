/**
*
* Constants
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import {Dimensions} from 'react-native';
var Localization = require('./localization');

//define common
exports.WIDTH_SCREEN = Dimensions.get('window').width;
exports.HEIGHT_SCREEN = Dimensions.get('window').height;
exports.HEIGHT_KEYBOARD_IOS = 216;

//define route id
exports.FLASHSCREEN_ROUTE_ID = 0;
exports.LOGIN_ROUTE_ID = 1;
exports.SHOW_PROFILE_ROUTE_ID = 2;
exports.HOME_ROUTE_ID = 3;

exports.TIMER_FLASHSCREEN = 200;