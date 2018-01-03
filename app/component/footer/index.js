/**
*
* Footer
*
* @author  Minh Huy
* @version 1.0
* @since   09-12-2017
*/

import React,{Component} from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableOpacity,
  Image
}from 'react-native';
var Global = require('../../common/global');

class Footer extends Component
{
  propTypes:{
    onEvent: React.PropTypes.func,
    onVenue: React.PropTypes.func,
    onUpdateProfile: React.PropTypes.func,
    isHide: React.PropTypes.bool
  }

  render(){
    if(this.props.isHide){
      return(<View></View>);
    }
    return(
      <View style={{height: 50, width: Global.Constants.WIDTH_SCREEN, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15}}>
          <TouchableOpacity onPress={this.props.onEvent} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
            <Image source={require('../../images/ic_event.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onVenue} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
            <Image source={require('../../images/ic_venue.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onUpdateProfile} underlayColor={'transparent'} style={{width: 70, justifyContent: 'center'}}>
            <Image source={require('../../images/ic_profile.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
          </TouchableOpacity>
      </View>
    );
  }
}
module.exports = Footer;
