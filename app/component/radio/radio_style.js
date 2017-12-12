/**
*
* Radio Style Component
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React,{
  StyleSheet,
  Dimensions,
}from 'react-native';
var Global = require('../../common/global');
var window = Dimensions.get('window');
module.exports = StyleSheet.create({
  outerCircle: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2 / window.scale,
    borderRadius: 10,
    backgroundColor: 'transparent'
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8
  }
});
