/**
*
* FlashScreen
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

class FlashScreen extends Component
{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <View style={{height: Global.Constants.HEIGHT_SCREEN, width: Global.Constants.WIDTH_SCREEN, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: Global.Constants.WIDTH_SCREEN - 20, width: Global.Constants.WIDTH_SCREEN - 20, borderRadius: Global.Constants.WIDTH_SCREEN/2 - 10, backgroundColor: '#FFE8E8', opacity: 0.5}}></View>
          <View style={{height: Global.Constants.WIDTH_SCREEN - 90, width: Global.Constants.WIDTH_SCREEN - 90, borderRadius: Global.Constants.WIDTH_SCREEN/2 - 45, backgroundColor: '#FFE8E8', position: 'absolute', justifyContent: 'center'}}>
              <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../images/img_logo.png')}
                    style={{width: Global.Constants.WIDTH_SCREEN - 150, height: 50}}>
                  </Image>
              </View>
              <View style={{marginTop: -10, backgroundColor: 'transparent', marginLeft: 45}}>
                  <Text allowFontScaling={false} style={{color: '#476071', fontSize: 10}}>{'Why do things alone?'}</Text>
              </View>
          </View>
      </View>
    );
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.navigator.push({
        id: Global.Constants.LOGIN_ROUTE_ID
      });
    }, Global.Constants.TIMER_FLASHSCREEN);
  }
}
module.exports = FlashScreen;
