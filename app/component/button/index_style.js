/**
*
* Button Custom Style Component
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React,{
  StyleSheet
}from 'react-native';
var Global = require('../../common/global');

module.exports = StyleSheet.create({
  container:{
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius: 4
  },
  text:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:4,
    paddingBottom:4,
    fontWeight:'bold',
    textAlign: 'center',
    textAlignVertical:'center',//android
  },
  // inactive:{
  //     backgroundColor:Global.Constants.BUTTON_INACTIVE_COLOR,
  // },
  // inactiveText:{
  //   color:'black'
  // }
});
