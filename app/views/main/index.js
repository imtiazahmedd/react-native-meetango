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
  Animated
}from 'react-native';

import Global from '../../common/global';
import Button  from '../../component/button/index';
import Base from '../base/index';
import Swiper from 'react-native-deck-swiper'
var Utils = Global.Utils;

class HomeScreen extends Base
{
  constructor(props){
    super(props);
    this.state = {
      cards: ['1', '2', '3'],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }

  renderContent(){
    return(
      <View style={{width: Global.Constants.WIDTH_SCREEN, backgroundColor: 'green'}}>
      <Swiper
      ref={swiper => {
        this.swiper = swiper
      }}
      onSwiped={this.onSwiped}
      onTapCard={this.jumpTo}
      cards={this.state.cards}
      cardIndex={this.state.cardIndex}
      cardVerticalMargin={80}
      renderCard={this.renderCard}
      onSwipedAll={this.onSwipedAllCards}
      overlayLabels={{
        bottom: {
          title: 'BLEAH',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
        },
        left: {
          title: 'NOPE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: -30
            }
          }
        },
        right: {
          title: 'LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: 30
            }
          }
        },
        top: {
          title: 'SUPER LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
        }
      }}
      animateOverlayLabelsOpacity
      animateCardOpacity
    >
      <Button onPress={this.swipeBack} title='Swipe Back' />
      <Button onPress={this.jumpTo} title='Jump to last index' />
    </Swiper>
      </View>
    );
  }

  renderCard = card => {
      return (
        <View style={{
          flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
        }}>
          <Text style={{
            textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
          }}>{card}</Text>
        </View>
      )
    };

    onSwipedAllCards = () => {
      this.setState({
        swipedAllCards: true
      })
    };

    swipeBack = () => {
      if (!this.state.isSwipingBack) {
        this.setIsSwipingBack(true, () => {
          this.swiper.swipeBack(() => {
            this.setIsSwipingBack(false)
          })
        })
      }
    };

    setIsSwipingBack = (isSwipingBack, cb) => {
      this.setState(
        {
          isSwipingBack: isSwipingBack
        },
        cb
      )
    };

    jumpTo = () => {
      this.swiper.swipeLeft()
    };

  componentDidMount(){
  }

}
module.exports = HomeScreen;
