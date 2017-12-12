/**
*
* android Index View
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React,{Component} from 'react';
import {
  AppRegistry,
  BackAndroid
} from 'react-native';
var Global = require('./app/common/global');
var RootView = require('./RootView');
var Utils=Global.Utils;

class Meetango extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <RootView ref="root" onRouteChange={this.onRouteChange.bind(this)}/>
    );
  }

  onRouteChange(id){
    this.currentRoute=id;
  }
}
console.disableYellowBox = true;
AppRegistry.registerComponent('Meetango', () => Meetango);
