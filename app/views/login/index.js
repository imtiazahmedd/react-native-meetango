/**
*
* LoginScreen
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
import Swiper from '../../component/swiper/index';

const Slide = ({title}) =>
  <View style={{alignItems: 'center'}}>
    <Image
      source={require('../../images/img_1.png')}
      style={{width: Global.Constants.WIDTH_SCREEN/2 + 40, height: Global.Constants.WIDTH_SCREEN/2 + 40}}>
    </Image>
    <Text numberOfLines={3} dellipsizeMode={'tail'} style={{fontFamily: 'System', fontSize: 16, color: '#173650', textAlign: 'center', width: Global.Constants.WIDTH_SCREEN/2 + 40}}>{title}</Text>
  </View>;

class LoginScreen extends Component
{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <View style={{height: Global.Constants.HEIGHT_SCREEN, width: Global.Constants.WIDTH_SCREEN, alignItems: 'center', marginTop: 60}}>
          <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../images/img_logo.png')}
                style={{width: Global.Constants.WIDTH_SCREEN/2 - 10, height: 70}}>
              </Image>
          </View>
          <View style={{height: Global.Constants.HEIGHT_SCREEN - 260, paddingTop: 50}}>
            <Swiper
              dots
              width={Global.Constants.WIDTH_SCREEN}
              height={Global.Constants.HEIGHT_SCREEN - 300}
              dotStyle={{height: 5, width: 5, borderRadius: 2.5}}
              dotStyleActive={{height: 5, width: 5, borderRadius: 2.5}}
              dotsColor="#BCE0FD"
              dotsColorActive="#2699FB">
              <Slide backgroundColor="white" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit  consectetur adipisicing elit" />
              <Slide backgroundColor="white" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
              <Slide backgroundColor="white" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
              <Slide backgroundColor="white" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
            </Swiper>
          </View>
          <View style={{bottom: 80, position: 'absolute'}}>
            <Button
                onPress={()=>{}}
                text={'LOGIN WITH FACEBOOK'}
                inactive={false}
                textColorActive={'white'}
                textColorInactive={'black'}
                backgroundColorActive={'#3B5998'}
                backgroundColorInactive={'white'}
                textStyle={{fontSize: 16, fontWeight: 'bold'}}
                style={{width: Global.Constants.WIDTH_SCREEN - 60, height: 48,}}/>
            <Text style={{fontFamily: 'System', fontSize: 14, color: '#92A6B7', textAlign: 'center', paddingTop: 30}}>{'By signing in, you agree to our'}</Text>
            <Text style={{fontFamily: 'System', fontSize: 14, color: '#92A6B7', textAlign: 'center', paddingTop: 5}}>{'Terms of Service and Privacy Policy'}</Text>
          </View>
      </View>
    );
  }

  componentDidMount(){

  }
}
module.exports = LoginScreen;
