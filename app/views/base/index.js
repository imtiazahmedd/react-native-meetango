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

    }
  }

  componentDidMount() {

  }

  render() {
      return (
        <View ref='mainView' style={{ height: Global.Constants.HEIGHT_SCREEN, width: Global.Constants.WIDTH_SCREEN, marginTop: Platform.OS == 'ios' ? 20 : 0}}>
          <Header
            isHide={this.state.isHideHeader}
            onHome={this.onHome.bind(this)}
            onMatch={this.onMatch.bind(this)}
            onChat={this.onChat.bind(this)}/>
          <View style={{height: Platform.OS == 'ios' ? Global.Constants.HEIGHT_SCREEN - 120 : Global.Constants.HEIGHT_SCREEN - 100}}>
            <ScrollView
              ref='_scrollview'
              showsVerticalScrollIndicator={false}
              scrollEnabled={!this.state.scrollEnabled}
              onScroll={this.onScrollView.bind(this)}>
              <TouchableOpacity activeOpacity={1} onPress={this.onCloseModalDropdown.bind(this)} style={[this.state.isDropdown && {width: Global.Constants.WIDTH_SCREEN, height: Global.Constants.HEIGHT_SCREEN - 103}]}>
                <View onLayout={() => { }} style={{flex: 1}}>
                  {this.renderContent()}
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Footer
            isHide={this.state.isHideFooter}
            onEvent={this.onEvent.bind(this)}
            onVenue={this.onVenue.bind(this)}
            onProfile={this.onProfile.bind(this)}
          />
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
  onHome(){}
  onMatch(){}
  onChat(){}
  onEvent(){}
  onVenue(){}
  onProfile(){}
  onCloseModalDropdown(){}
}

module.exports = MainView;
