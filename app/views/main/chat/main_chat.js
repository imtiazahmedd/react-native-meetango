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

class MainChatScreen extends Base
{
  constructor(props){
    super(props);
    this.state = {
        keyword: '',
        isHideFooter: true,
        newMatches: [
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'John'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Mario'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Robinson'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Tom'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Jellow'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'LockLook'
            }
        ],
        messages: [
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'John Henry',
                message: 'Hello'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Pierre',
                message: 'Bonjour, comment ca va?'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Case',
                message: 'Have a nice day!'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Jerry',
                message: 'Hi Tom. I\'m here!'
            },
            {
                avatar: require('../../../images/img_profile.png'),
                name: 'Minh Huy',
                message: 'Got to cinema, tonight with my friends. Wait for me 10 minutes, please!'
            }
        ]
    }
  }

  renderContent(){
    return(
      <View style={{width: Global.Constants.WIDTH_SCREEN}}>
        <View style={{width: Global.Constants.WIDTH_SCREEN - 20, alignSelf: 'center', height: 40, borderColor: '#CBCBCB', borderRadius: 10, borderWidth: 0.5}}>
           <TextInput
              style={{paddingLeft: 30, width: Global.Constants.WIDTH_SCREEN - 20, alignSelf: 'center', height: 40}}
              value={this.state.keyword}
              onChangeText={(value)=>{this.setState({keyword: value})}}
           />
           {this.state.keyword == '' && <View style={{position: 'absolute', alignSelf: 'center', flexDirection: 'row', marginTop: 7}}>
             <Image
               source={require('../../../images/ic_search_placeholder.png')}
               style={{width: 17, height: 23}}>
             </Image>
             <Text style={{paddingLeft: 10, color: '#95989A'}}>{'Search'}</Text>
           </View>}
        </View>
        <View style={{marginLeft: 10, marginTop: 10}}>
            <Text allowFontScaling={false} style={{color: '#EB6E6E', fontSize: 15, fontWeight: 'bold'}}>{'New matches'}</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: 100, paddingLeft: 10, marginTop: 10}}>
            {this.renderItem()}
        </ScrollView>
        <View style={{marginLeft: 10, marginTop: 10}}>
            <Text allowFontScaling={false} style={{color: '#EB6E6E', fontSize: 15, fontWeight: 'bold'}}>{'Messages'}</Text>
        </View>
        <View>
            {this.renderMessages()}
        </View>
      </View>
    );
  }

  renderItem(){
    var temp = [];
    var newMatches = this.state.newMatches;
    for(var i = 0; i < newMatches.length; i++){
      temp.push(
        <TouchableOpacity style={{alignSelf: 'center', marginRight: 10}}>
          <Image
            source={newMatches[i].avatar}
            style={{width: 80, height: 80}}>
          </Image>
          <Text allowFontScaling={false} style={{textAlign: 'center', color: '#5D3333'}}>{newMatches[i].name}</Text>
        </TouchableOpacity>
      );
    }
    return temp;
  }

  renderMessages(){
    var temp = [];
    var messages = this.state.messages;
    for(var i = 0; i < messages.length; i++){
      temp.push(
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}>
          <Image
            source={messages[i].avatar}
            style={{width: 80, height: 80}}>
          </Image>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text allowFontScaling={false} style={{fontSize: 15, color: '#5D3333', fontWeight: 'bold'}}>{messages[i].name}</Text>
              <Text allowFontScaling={false} numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize: 15, color: '#A09C9C', width: Global.Constants.WIDTH_SCREEN - 110}}>{messages[i].message}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return temp;
  }

  componentDidMount(){
  }

}
module.exports = MainChatScreen;
