/**
*
* Base View
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

import React, { Component } from 'react';
import {
  View,
  Platform,
  PanResponder,
  AsyncStorage,
  InteractionManager,
  Text,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
  processColor
} from 'react-native';

import Global from '../../common/global';
import Header from '../../component/header/index';
import Footer from '../../component/footer/index';

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableIndex: 0
    }
  }

  componentDidMount() {

  }

  renderHeader(){
    return(
        <Header
            isHide={this.state.isHideHeader}
            onHome={this.onHome.bind(this)}
            onMatch={this.onMatch.bind(this)}
            availableIndex={this.state.availableIndex}
            onChat={this.onChat.bind(this)}/>
    );
  }

  renderFooter(){
    return(
        <Footer
            isHide={false}
            onEvent={this.onEvent.bind(this)}
            onVenue={this.onVenue.bind(this)}
            onProfile={this.onProfile.bind(this)}
            availableIndex={this.state.availableIndex}
        />
    );
  }

  render() {
      var heightContent = '';
      if(this.state.isHideHeader && this.state.isHideFooter){
        heightContent = Global.Constants.HEIGHT_SCREEN;
      }else if(this.state.isHideHeader && this.state.anotherHead){
          heightContent = Global.Constants.HEIGHT_SCREEN - (Global.Constants.HEIGHT_SCREEN - 10);
      } else {
        if(this.state.isHideHeader || this.state.isHideFooter){
          heightContent = Global.Constants.HEIGHT_SCREEN - 53;
        } else {
          heightContent = Global.Constants.HEIGHT_SCREEN - 120;
        }
      }
      return (
        <View ref='mainView' style={{ height: Global.Constants.HEIGHT_SCREEN, width: Global.Constants.WIDTH_SCREEN, marginTop: Platform.OS == 'ios' ? 20 : 0}}>
            {this.renderHeader()}
            <View style={{height: Platform.OS == 'ios' ? heightContent - 20 : heightContent}}>
              <ScrollView
                ref='_scrollview'
                showsVerticalScrollIndicator={false}
                scrollEnabled={!this.state.scrollDisable}
                onScroll={this.onScrollView.bind(this)}>
                <View acstiveOpacity={1} onPress={this.onCloseModalDropdown.bind(this)} style={[this.state.isDropdown && {width: Global.Constants.WIDTH_SCREEN, height: Global.Constants.HEIGHT_SCREEN}]}>
                  <View onLayout={() => { }} style={{}}>
                    {this.renderContent()}
                  </View>
                </View>
              </ScrollView>
            </View>
            {!this.state.isHideFooter && this.renderFooter()}
            {this.state.isModal && <View ref="modalContent" style={{ position: 'absolute', right: 0, left: 0, bottom: 0, top: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.backgroundColorModal !== undefined ? this.state.backgroundColorModal : 'rgba(0, 0, 0, 0.2)', width: this.state.widthGlobal, height: this.state.heightGlobal }} onLayout={() => { }}>
              {this.renderModal()}
            </View>}
            {this.state.isDropdown && <View ref="dropdownContent" style={{ position: 'absolute', marginTop: this.state.dropdownTop, marginLeft: this.state.dropdownLeft, marginRight: this.state.dropdownRight, width: this.state.dropdownWidth !== undefined && this.state.dropdownWidth > 0 ? this.state.dropdownWidth : Global.Constants.WIDTH_SCREEN }} onLayout={() => { }}>
              {this.renderDropdown()}
            </View>}
        </View>
      );
  }

  onScrollView(){}
  renderContent(){}
  onHome(){
    this.props.navigator.replace({
      id: Global.Constants.HOME_ROUTE_ID
    });
  }
  onMatch(){
      this.props.navigator.replace({
          id: Global.Constants.MATCH_PAGE_MAIN_ROUTE_ID
      });
  }
  onChat(){
    this.props.navigator.replace({
      id: Global.Constants.CHAT_MAIN_ROUTE_ID
    });
  }
  onEvent(){
      this.props.navigator.replace({
          id: Global.Constants.EVENT_PAGE_ROUTE_ID
      });
  }
  onVenue(){
      this.props.navigator.replace({
          id: Global.Constants.LOCATION_ROUTE_ID
      });
  }
  onProfile(){}
  onCloseModalDropdown(){}
}

module.exports = MainView;
