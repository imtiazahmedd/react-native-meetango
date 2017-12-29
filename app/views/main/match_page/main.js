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

class MatchPageMainScreen extends Base
{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  renderContent(){
    return(
      <View style={{width: Global.Constants.WIDTH_SCREEN}}>
          {this.renderMainPage()}
      </View>
    );
  }

  renderMainPage(){
    return(
        <View>
            <Image
                source={require('../../../images/img_1.png')}
                style={{width: Global.Constants.WIDTH_SCREEN - 10, borderRadius: 20, height: Global.Constants.HEIGHT_SCREEN/2}}>
                <View style={{marginLeft: 25, flexDirection: 'column', bottom: 20, position: 'absolute'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{'John Kevin'}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{'20 ago'}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>{'Software Engineer'}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>{'Ho Chi Minh City, Vietnam'}</Text>
                </View>
                <TouchableOpacity style={{marginTop: Global.Constants.HEIGHT_SCREEN/2 - 100, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Image
                        source={require('../../../images/ic_info.png')}
                        style={{width: 80, height: 80}}>
                    </Image>
                </TouchableOpacity>
            </Image>
        </View>
    );
  }

}
module.exports = MatchPageMainScreen;
