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

class RootView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator
      configureScene={(route, routeStack) => this.configureScene(route)}
      initialRoute={{ id: Global.Constants.HOME_ROUTE_ID}}
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
        default:
    }
  }
}

module.exports=RootView;
