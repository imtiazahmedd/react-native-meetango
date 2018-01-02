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
exports.CHAT_MAIN_ROUTE_ID = 4;
exports.CHAT_PERSON_ROUTE_ID = 5;
exports.CHAT_PAGE_ROUTE_ID = 6;
exports.MATCH_PAGE_MAIN_ROUTE_ID = 7;
exports.EVENT_PAGE_ROUTE_ID = 8;
exports.MAP_PAGE_ROUTE_ID = 9;
exports.EVENT_SETTING_ROUTE_ID = 10;
exports.LOCATION_ROUTE_ID = 12;
exports.EDIT_INFO_ROUTE_ID = 11;

exports.TIMER_FLASHSCREEN = 200;
