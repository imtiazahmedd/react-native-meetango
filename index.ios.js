/**
*
* iOS Index View
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React,{Component} from 'react';
import {
  AppRegistry
} from 'react-native';
var Global = require('./app/common/global');
var RootView = require('./RootView');

class Meetango extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <RootView ref="root"/>
    );
  }
}
console.disableYellowBox = true;
AppRegistry.registerComponent('Meetango', () => Meetango);
