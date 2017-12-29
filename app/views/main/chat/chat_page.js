/**
*
* HomeScreen
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
  Navigator,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated
}from 'react-native';

import Global from '../../../common/global';
import Button  from '../../../component/button/index';
import Base from '../../base/index';
var Utils = Global.Utils;

class PageChatScreen extends Base
{
  constructor(props){
    super(props);
    this.state = {
        keyword: '',
        isHideFooter: false
    }
  }

  renderContent(){
    return(
      <View style={{width: Global.Constants.WIDTH_SCREEN}}>
          <Text style={{color: '#A09C9C', textAlign: 'center', fontSize: 10, paddingTop: 5}}>{'20 days ago, 1 Nov 2017 1:20 PM'}</Text>
      </View>
    );
  }

  renderHeader(){
      return(
          <View>
          <View style={{width: Global.Constants.WIDTH_SCREEN, marginTop: 5, justifyContent: 'space-between', flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={{marginLeft: 10}}>
                 <Image
                     source={require('../../../images/ic_arrow_left.png')}
                     style={{width: 18, height: 30}}>
                 </Image>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Image
                      source={require('../../../images/img_profile.png')}
                      style={{width: 30, height: 30}}>
                  </Image>
                  <Text style={{color: '#5D3333', paddingLeft: 10}}>{'Eric'}</Text>
              </View>
              <View></View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#AA9D9D', marginTop: 5, width: Global.Constants.WIDTH_SCREEN}}></View>
          </View>
      );
  }

  renderFooter(){
      return(
          <View style={{height: 50, width: Global.Constants.WIDTH_SCREEN}}>
              <View style={{height: 0.5, backgroundColor: '#AA9D9D'}}></View>
              <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row', marginTop: 10}}>
                  <TouchableOpacity style={{width: 50, height: 37, borderRadius: 10, backgroundColor: '#FF6060', justifyContent: 'center'}}>
                      <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>{'GIF'}</Text>
                  </TouchableOpacity>
                  <View style={{width: Global.Constants.WIDTH_SCREEN - 140, justifyContent: 'center'}}>
                      <TextInput
                          placeholder={'Text Message...'}
                          style={{paddingLeft: 10, height: 40}}
                      />
                  </View>
                  <TouchableOpacity style={{width: 70, justifyContent: 'center'}}>
                      <Text style={{color: '#534B4B', fontSize: 17, fontWeight: 'bold', textAlign: 'center'}}>{'Send'}</Text>
                  </TouchableOpacity>
              </View>
          </View>
      );
  }
}
module.exports = PageChatScreen;
