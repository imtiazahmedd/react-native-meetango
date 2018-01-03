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
    Animated, Dimensions
} from 'react-native';
const { width, height }  = Dimensions.get('window');
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
            cards: ['1', '2', '3', '4', '5', '6'],
            swipedAllCards: false,
            swipeDirection: '',
            isSwipingBack: false,
            cardIndex: 0,
            scrollDisable: true,
            availableIndex: 1
        }
  }
    renderContent(){
      return(
          <View style={{flex: 1,flexDirection: 'column'}}>
              <View style={{height: height*1}}>
                  <View style={{flex: 1,flexDirection: 'column'}}>
                      <View style={{height: height*0.6,margin:10,borderColor:'grey',borderWidth:1,borderRadius:10}}>
                          <View style={{flex: 1,flexDirection: 'column'}}>
                              <View style={{width:width*1,height: height*0.35}}>
                                  <TouchableOpacity>
                                      <Image
                                          source={require('../../images/star.png')}
                                          style={{width: width*1, height: height*0.35}}>
                                      </Image>
                                  </TouchableOpacity>
                              </View>
                              <View style={{ height: height*0.16}}>
                                  <View style={{flex: 1, flexDirection: 'row'}}>
                                      <View style={{width: width*0.3,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:35,color:'green',fontWeight:'bold'}}>25</Text>
                                        <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>AGO</Text>
                                      </View>
                                      <View style={{width: width*0.7}}>
                                          <Text style={{fontWeight:'bold',fontSize:20,margin:8}}>Conceptual Art: An Introduction - With Alessandra Dias</Text>
                                      </View>
                                  </View>
                              </View>
                              <View style={{height: height*0.1}}>
                                      <View style={{marginLeft:width*0.75}}>
                                          <TouchableOpacity>
                                          <Image
                                              source={require('../../images/ic_info.png')}
                                              style={{height: 60, width:60}}>
                                          </Image>
                                          </TouchableOpacity>
                                      </View>
                              </View>
                          </View>
                      </View>

                      <View style={{ height: height*0.05,alignItems:'center'}}>
                          <Text>Around<Text style={{color:'red',fontWeight:'bold'}}> 3Km </Text> | Peroid: <Text style={{color:'red',fontWeight:'bold'}}>Today</Text></Text>
                      </View>
                      <View style={{height: height*0.15}}>
                          <View style={{flex: 1, flexDirection: 'row'}}>
                              <View style={{width: width*0.33}}>
                                  <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
                                      <TouchableOpacity>
                                          <View style={{height:height*0.1,width:height*0.1,margin:10}}>
                                              <Image
                                                  source={require('../../images/ic_nope.png')}
                                                  style={{height: 60, width:60}}>
                                              </Image>
                                          </View>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                              <View style={{width: width*0.33}}>
                                  <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
                                      <TouchableOpacity>
                                          <View style={{height:height*0.1,width:height*0.1,margin:10}}>
                                              <Image
                                                  source={require('../../images/ic_filter.png')}
                                                  style={{height: 60, width:60}}>
                                              </Image>
                                          </View>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                              <View style={{width: width*0.33}}>
                                  <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
                                      <TouchableOpacity>
                                          <View style={{height:height*0.1,width:height*0.1,margin:10}}>
                                              <Image
                                                  source={require('../../images/ic_like.png')}
                                                  style={{height: 60, width:60}}>
                                              </Image>
                                          </View>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      )
  }

  // renderContent(){
  //   return(
  //     <View style={{width: Global.Constants.WIDTH_SCREEN}}>
  //       <Swiper
  //         ref={swiper => {
  //           this.swiper = swiper
  //         }}
  //         onSwiped={this.onSwiped}
  //         onTapCard={this.jumpTo}
  //         cards={this.state.cards}
  //         cardIndex={this.state.cardIndex}
  //         cardVerticalMargin={20}
  //         cardHorizontalMargin={5}
  //         renderCard={this.renderCard}
  //         onSwipedAll={this.onSwipedAllCards}
  //         overlayLabels={{
  //           bottom: {
  //             title: 'NOPE',
  //             style: {
  //               label: {
  //                 backgroundColor: 'transparent',
  //                 borderColor: '#F01212',
  //                 color: '#F01212',
  //                 borderWidth: 5
  //               },
  //               wrapper: {
  //                 flexDirection: 'column',
  //                 alignItems: 'center',
  //                 justifyContent: 'center'
  //               }
  //             }
  //           },
  //           left: {
  //             title: 'NOPE',
  //             style: {
  //               label: {
  //                 backgroundColor: 'transparent',
  //                 borderColor: '#F01212',
  //                 color: '#F01212',
  //                 borderWidth: 5
  //               },
  //               wrapper: {
  //                 flexDirection: 'column',
  //                 alignItems: 'flex-end',
  //                 justifyContent: 'flex-start',
  //                 marginTop: 30,
  //                 marginLeft: -30
  //               }
  //             }
  //           },
  //           right: {
  //             title: 'LIKE',
  //             style: {
  //               label: {
  //                 backgroundColor: 'transparent',
  //                 borderColor: '#32BF7E',
  //                 color: '#32BF7E',
  //                 borderWidth: 5
  //               },
  //               wrapper: {
  //                 flexDirection: 'column',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'flex-start',
  //                 marginTop: 30,
  //                 marginLeft: 30
  //               }
  //             }
  //           },
  //           top: {
  //             title: 'LIKE',
  //             style: {
  //               label: {
  //                 backgroundColor: 'transparent',
  //                 borderColor: '#32BF7E',
  //                 color: '#32BF7E',
  //                 borderWidth: 5
  //               },
  //               wrapper: {
  //                 flexDirection: 'column',
  //                 alignItems: 'center',
  //                 justifyContent: 'center'
  //               }
  //             }
  //           }
  //         }}
  //         animateOverlayLabelsOpacity
  //         animateCardOpacity>
  //         <View style={{marginTop: Global.Constants.HEIGHT_SCREEN - 220}}>
  //             <View style={{flexDirection: 'row', justifyContent: 'center', height: 30, width: Global.Constants.WIDTH_SCREEN - 80, alignSelf: 'center', backgroundColor: 'white'}}>
  //               <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, width: Global.Constants.WIDTH_SCREEN/2 - 10}}>
  //                    <Text style={{textAlign: 'right', fontSize: 12, paddingRight: 5, color: '#938A8A'}}>{'Around:'}</Text>
  //                    <Text style={{textAlign: 'right', fontSize: 12, color: '#EB5E5E'}}>{'3km'}</Text>
  //               </View>
  //               <View>
  //                 <Text style={{textAlign: 'center', fontSize: 12, color: '#000000'}}>{'|'}</Text>
  //               </View>
  //               <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, width: Global.Constants.WIDTH_SCREEN/2 - 10}}>
  //                    <Text style={{textAlign: 'right', fontSize: 12, paddingRight: 5, color: '#938A8A'}}>{'Period:'}</Text>
  //                    <Text style={{textAlign: 'right', fontSize: 12, color: '#EB5E5E'}}>{'Today'}</Text>
  //               </View>
  //             </View>
  //             <View style={{flexDirection: 'row', justifyContent: 'space-between', width: Global.Constants.WIDTH_SCREEN - 80, alignSelf: 'center'}}>
  //                 <TouchableOpacity>
  //                     <Image
  //                       source={require('../../images/ic_nope.png')}
  //                       style={{width: 80, height: 80}}>
  //                     </Image>
  //                 </TouchableOpacity>
  //                 <TouchableOpacity>
  //                     <Image
  //                       source={require('../../images/ic_filter.png')}
  //                       style={{width: 80, height: 80}}>
  //                     </Image>
  //                 </TouchableOpacity>
  //                 <TouchableOpacity>
  //                     <Image
  //                       source={require('../../images/ic_like.png')}
  //                       style={{width: 80, height: 80}}>
  //                     </Image>
  //                 </TouchableOpacity>
  //             </View>
  //         </View>
  //       </Swiper>
  //     </View>
  //   );
  // }
  //
  // renderCard(card){
  //     return (
  //       <View style={{height: Global.Constants.HEIGHT_SCREEN - 250, width: Global.Constants.WIDTH_SCREEN - 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#95989A', borderRadius: 10}}>
  //         <Image
  //           source={require('../../images/img_1.png')}
  //           style={{width: Global.Constants.WIDTH_SCREEN - 10}}>
  //         </Image>
  //         <View style={{flexDirection: 'row', width: Global.Constants.WIDTH_SCREEN - 40, height: 90}}>
  //             <View style={{width: Global.Constants.WIDTH_SCREEN/4 - 10, justifyContent: 'center'}}>
  //                 <Text style={{color: '#32BF7E', fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>{'25'}</Text>
  //                 <Text style={{color: '#F01212', fontSize: 10, textAlign: 'center', fontWeight: 'bold'}}>{'AGO'}</Text>
  //             </View>
  //             <View style={{width: 3*Global.Constants.WIDTH_SCREEN/4 - 30}}>
  //               <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{'Conceptual Art: An\nIntroduction - With\nAlessandra Dias'}</Text>
  //               <Text style={{color: '#918989', fontSize: 9}}>{'100 Le Dinh Ly, Ho Chi Minh City'}</Text>
  //             </View>
  //         </View>
  //         <TouchableOpacity style={{justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10}}>
  //             <Image
  //               source={require('../../images/ic_info.png')}
  //               style={{width: 50, height: 50}}>
  //             </Image>
  //         </TouchableOpacity>
  //       </View>
  //     )
  // };
  //
  // onSwipedAllCards(){
  //   this.setState({
  //     swipedAllCards: true
  //   })
  // };
  //
  // swipeBack() {
  //   if (!this.state.isSwipingBack) {
  //     this.setIsSwipingBack(true, () => {
  //       this.swiper.swipeBack(() => {
  //         this.setIsSwipingBack(false)
  //       })
  //     })
  //   }
  // };
  //
  // setIsSwipingBack(isSwipingBack, cb){
  //   this.setState({
  //       isSwipingBack: isSwipingBack
  //     },
  //     cb
  //   )
  // };
  //
  // jumpTo(){
  //   //this.swiper.swipeLeft()
  // };
  //
  // componentDidMount(){
  // }

}
module.exports = HomeScreen;
