/**
*
* Header Component
*
* @author  Minh Huy
* @version 1.0
* @since   09-12-2017
*/

import React,{Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text
}from 'react-native';
var Global = require('../../common/global');

class Header extends Component
{
  propTypes:{
      onHome:React.PropTypes.func,
      onMatch: React.PropTypes.func,
      onChat: React.PropTypes.func,
      isHide: React.PropTypes.bool
  }

  render(){
    if(this.props.isHide){
      return(<View></View>);
    }
    return(
        <View style={{height: 50, width: Global.Constants.WIDTH_SCREEN, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15}}>
            <TouchableOpacity onPress={this.props.onHome} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
              <Image source={require('../../images/ic_home.png')} resizeMode={'contain'} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onMatch} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
              <Image source={require('../../images/ic_match_page.png')} resizeMode={'contain'} style={{width: 40, height: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onChat} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
              <Image source={require('../../images/ic_chat.png')} resizeMode={'contain'} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
        </View>
    );
  }
}
module.exports = Header;
