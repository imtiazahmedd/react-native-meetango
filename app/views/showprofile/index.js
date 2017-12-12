/**
*
* ShowProfileScreen
*
* @author  Minh Huy
* @version 1.0
* @since   09-12-2017
*/

import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  Animated
}from 'react-native';

import Global from '../../common/global';
import Button  from '../../component/button/index';
var Utils = Global.Utils;

class ShowProfileScreen extends Component
{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <View style={{height: Global.Constants.HEIGHT_SCREEN, width: Global.Constants.WIDTH_SCREEN, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: Global.Constants.WIDTH_SCREEN - 90, width: Global.Constants.WIDTH_SCREEN - 90, borderRadius: Global.Constants.WIDTH_SCREEN/2 - 45, backgroundColor: '#FAF5F5', opacity: 0.5}}></View>
          <View style={{height: Global.Constants.WIDTH_SCREEN - 180, width: Global.Constants.WIDTH_SCREEN - 180, borderRadius: Global.Constants.WIDTH_SCREEN/2 - 90, backgroundColor: '#FAC0C0', position: 'absolute', justifyContent: 'center'}}>
              <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../images/img_profile.png')}
                    style={{width: 100, height: 100}}>
                  </Image>
              </View>
          </View>
      </View>
    );
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.navigator.push({
        id: Global.Constants.HOME_ROUTE_ID
      });
    }, Global.Constants.TIMER_FLASHSCREEN);
  }
}
module.exports = ShowProfileScreen;
