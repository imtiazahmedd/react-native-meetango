// import React,{Component} from 'react';
// import {
//     View,
//     Image,
//     Text,
//     Navigator,
//     TouchableOpacity,
//     Animated, Dimensions
// } from 'react-native';
// const { width, height }  = Dimensions.get('window');
// import Global from '../../common/global';
// import Button  from '../../component/button/index';
// import Base from '../base/index';
// import Swiper from 'react-native-deck-swiper'
// var Utils = Global.Utils;
//
// class HomeScreen extends Base
// {
//   constructor(props){
//     super(props);
//         this.state = {
//             cards: ['1', '2', '3', '4', '5', '6'],
//             swipedAllCards: false,
//             swipeDirection: '',
//             isSwipingBack: false,
//             cardIndex: 0,
//             scrollDisable: true,
//             availableIndex: 1
//         }
//   }
//     renderContent(){
//       return(
//           <View style={{flex: 1,flexDirection: 'column'}}>
//               <View style={{height: height*1}}>
//                   <View style={{flex: 1,flexDirection: 'column'}}>
//                       <View style={{height: height*0.6,margin:10,borderColor:'grey',borderWidth:1,borderRadius:10}}>
//                           <View style={{flex: 1,flexDirection: 'column'}}>
//                               <View style={{width:width*1,height: height*0.35}}>
//                                   <TouchableOpacity>
//                                       <Image
//                                           source={require('../../images/star.png')}
//                                           style={{width: width*1, height: height*0.35}}>
//                                       </Image>
//                                   </TouchableOpacity>
//                               </View>
//                               <View style={{ height: height*0.16}}>
//                                   <View style={{flex: 1, flexDirection: 'row'}}>
//                                       <View style={{width: width*0.3,alignItems:'center',justifyContent:'center'}}>
//                                         <Text style={{fontSize:35,color:'green',fontWeight:'bold'}}>25</Text>
//                                         <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>AGO</Text>
//                                       </View>
//                                       <View style={{width: width*0.7}}>
//                                           <Text style={{fontWeight:'bold',fontSize:20,margin:8}}>Conceptual Art: An Introduction - With Alessandra Dias</Text>
//                                       </View>
//                                   </View>
//                               </View>
//                               <View style={{height: height*0.1}}>
//                                       <View style={{marginLeft:width*0.75}}>
//                                           <TouchableOpacity>
//                                           <Image
//                                               source={require('../../images/ic_info.png')}
//                                               style={{height: 60, width:60}}>
//                                           </Image>
//                                           </TouchableOpacity>
//                                       </View>
//                               </View>
//                           </View>
//                       </View>
//
//                       <View style={{ height: height*0.05,alignItems:'center'}}>
//                           <Text>Around<Text style={{color:'red',fontWeight:'bold'}}> 3Km </Text> | Peroid: <Text style={{color:'red',fontWeight:'bold'}}>Today</Text></Text>
//                       </View>
//                       <View style={{height: height*0.15}}>
//                           <View style={{flex: 1, flexDirection: 'row'}}>
//                               <View style={{width: width*0.33}}>
//                                   <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
//                                       <TouchableOpacity>
//                                           <View style={{height:height*0.1,width:height*0.1,margin:10}}>
//                                               <Image
//                                                   source={require('../../images/ic_nope.png')}
//                                                   style={{height: 60, width:60}}>
//                                               </Image>
//                                           </View>
//                                       </TouchableOpacity>
//                                   </View>
//                               </View>
//                               <View style={{width: width*0.33}}>
//                                   <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
//                                       <TouchableOpacity>
//                                           <View style={{height:height*0.1,width:height*0.1,margin:10}}>
//                                               <Image
//                                                   source={require('../../images/ic_filter.png')}
//                                                   style={{height: 60, width:60}}>
//                                               </Image>
//                                           </View>
//                                       </TouchableOpacity>
//                                   </View>
//                               </View>
//                               <View style={{width: width*0.33}}>
//                                   <View style={{width: width*0.33,alignItems:'center',justifyContent:'center'}}>
//                                       <TouchableOpacity>
//                                           <View style={{height:height*0.1,width:height*0.1,margin:10}}>
//                                               <Image
//                                                   source={require('../../images/ic_like.png')}
//                                                   style={{height: 60, width:60}}>
//                                               </Image>
//                                           </View>
//                                       </TouchableOpacity>
//                                   </View>
//                               </View>
//                           </View>
//                       </View>
//                   </View>
//               </View>
//           </View>
//       )
//   }
// }
// module.exports = HomeScreen;






import React, {Component} from 'react'
import Swiper from 'react-native-deck-swiper'
import {Button, StyleSheet, Text, View} from 'react-native'
import Base from '../base/index';



class HomeScreen extends Component{
    constructor(){
        super();
    }
    render(){
        var students = [{name: "Kashif", age: 24},{name: "Imtiaz", age: 24},{name: "Junaid", age: 24}];
        return(
            <View style={styles.container}>
                <Swiper
                    cards={[0,1,2]}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>Student Name: {students[card].name}</Text>
                                <Text style={styles.text}>Age: {students[card].age}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedAll={() => {console.log('onSwipedAll')}}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}>
                    <Button
                        onPress={() => {console.log('oulala')}}
                        title="Press me">
                        You can press me
                    </Button>
                </Swiper>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent'
    }
});
module.exports = HomeScreen;