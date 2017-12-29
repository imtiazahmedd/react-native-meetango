/**
*
* RootView
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Platform
} from 'react-native';

var Global = require('./app/common/global');

var FlashScreen = require('./app/views/flashscreen/index');
var LoginScreen = require('./app/views/login/index');
var ShowProfileScreen = require('./app/views/showprofile/index');
var HomeScreen = require('./app/views/main/index');
var MainChatScreen = require('./app/views/main/chat/main_chat');
var PersonChatScreen = require('./app/views/main/chat/chat_person');
var PageChatScreen = require('./app/views/main/chat/chat_page');
var MatchPageMainScreen = require('./app/views/main/match_page/main');
var EventPageMainScreen = require('./app/views/bottom/event');
var MapPageScreen = require('./app/views/events/map');
var EventSettingsPageScreen= require('./app/views/events/eventsettings');

class RootView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator
      configureScene={(route, routeStack) => this.configureScene(route)}
      initialRoute={{ id: Global.Constants.MATCH_PAGE_MAIN_ROUTE_ID}}
      renderScene={this.renderScene.bind(this)} />
    );
  }

  configureScene(route){
      return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene(route, navigator){
    if(this.props.onRouteChange){
      this.props.onRouteChange(route.id);
    }

    switch (route.id) {
        case Global.Constants.FLASHSCREEN_ROUTE_ID:
             return (<FlashScreen navigator={navigator}/>);
        case Global.Constants.LOGIN_ROUTE_ID:
             return (<LoginScreen navigator={navigator}/>);
        case Global.Constants.SHOW_PROFILE_ROUTE_ID:
             return (<ShowProfileScreen navigator={navigator}/>);
        case Global.Constants.HOME_ROUTE_ID:
             return (<HomeScreen navigator={navigator}/>);
        case Global.Constants.CHAT_MAIN_ROUTE_ID:
             return (<MainChatScreen navigator={navigator}/>);
        case Global.Constants.CHAT_PERSON_ROUTE_ID:
            return (<PersonChatScreen navigator={navigator}/>);
        case Global.Constants.CHAT_PAGE_ROUTE_ID:
            return (<PageChatScreen navigator={navigator}/>);
        case Global.Constants.MATCH_PAGE_MAIN_ROUTE_ID:
            return (<MatchPageMainScreen navigator={navigator}/>);
        case Global.Constants.EVENT_PAGE_ROUTE_ID:
            return (<EventPageMainScreen navigator={navigator}/>);
        case Global.Constants.MAP_PAGE_ROUTE_ID:
            return (<MapPageScreen navigator={navigator}/>);
        case Global.Constants.EVENT_SETTING_ROUTE_ID:
            return (<EventSettingsPageScreen navigator={navigator}/>);
        default:
    }
  }
}

module.exports=RootView;

//<View style={{flex: 1, flexDirection: 'row'}}>
//    <View style={{width: 250, height: 150, backgroundColor: 'powderblue'}} />
//    <View style={{width: 800, height: 150, backgroundColor: 'skyblue'}} />
//    <View style={{width: 250, height: 150, backgroundColor: 'steelblue'}} />
//</View>
