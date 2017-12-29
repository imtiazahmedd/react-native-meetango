/**
*
* Button Custom Component
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/


import React,{Component} from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  Platform
}from 'react-native';
import styles from './index_style';
import Global from '../../common/global';

class ButtonCustom extends Component{
  constructor(props){
    super(props);
    if(Platform.OS=='android' && this.props.shouldForceResponder){
      this.buttonId=this.guid();
    }else{
      this.buttonId=0;
    }
  }
  propTypes:{
    onPress:React.PropTypes.func,
    text:string,
    style:Object,
    inactive:bool,
    color:Global.Constants.APP_COLOR,
    textColor:'white',
    shouldForceResponder:bool,
    baseView:Object,
    backgroundColorInactive:String,
    backgroundColorActive:String,
    textColorInactive:String,
    textColorActive:String
  }
  render(){
    const shadowOpt = {
        width:100,
        height:100,
        color:"#000",
        border:2,
        radius:3,
        opacity:0.2,
        x:0,
        y:3,
        style:{marginVertical:5}
    }
    var color = 'white';
    var textColor = this.props.inactive ? this.props.textColorInactive : this.props.textColorActive;
    var backgroundColorButton = this.props.inactive ? this.props.backgroundColorInactive : this.props.backgroundColorActive;
    return(
        <TouchableHighlight
          onPress={this.props.onPress}
          disabled={this.props.inactive}
          underlayColor={this.props.backgroundColorInactive}
          style={[styles.container,{backgroundColor: backgroundColorButton, borderRadius: 50, height: 40, borderColor: backgroundColorButton}, this.props.inactive && styles.inactive,this.props.style]}>
          <View onStartShouldSetResponder={(e)=>this.props.shouldForceResponder && Platform.OS=='android'}
            onMoveShouldSetResponder={(e)=>this.props.shouldForceResponder && Platform.OS=='android'}
            onResponderGrant={this.onGrant.bind(this)}>
            <Text allowFontScaling={false} style={[styles.text, {color:textColor, backgroundColor: 'transparent'}, this.props.textStyle, this.props.inactive && styles.inactiveText]}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  onGrant(){
    if(this.props.onPress && this.props.baseView && Platform.OS=='android'){
      this.props.baseView.grantFromListViewButton=true;
      this.props.baseView.lastListViewButtonClickId=this.buttonId;
      let self=this;
      self.props.baseView.gesture.dx=0;
      self.props.baseView.gesture.dy=0;
      self.props.baseView.scrollMoveNum=0;
      var handler=setTimeout(function(){
        if(self.props.baseView.lastListViewButtonClickId==self.buttonId
            && Math.abs(self.props.baseView.gesture.dx)<=1.5 && Math.abs(self.props.baseView.gesture.dy)<=1.5){

          let onPress=self.props.onPress;
          onPress();
        }
      }, 150);
    }
  }


  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
module.exports = ButtonCustom;
