import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
}from 'react-native';
var Indicator = require('../activity_indicator/activity_indicator');
class ProgressVC extends Component
{
  propTypes:{
    show:bool
  }

  render(){
      return(
        <View style={styles.container}>
            <Indicator />
        </View>
      );
  }
}

var styles = StyleSheet.create({
  container:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems:'center',
    justifyContent:'center'
  }
});

module.exports = ProgressVC;
