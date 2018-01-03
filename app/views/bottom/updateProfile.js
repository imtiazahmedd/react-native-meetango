
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
    TextInput,
    ScrollView,
    Animated, Dimensions
} from 'react-native';

import Global from '../../common/global';
import Button  from '../../component/button/index';
import Base from '../base/index';
var Utils = Global.Utils;
const { width, height }  = Dimensions.get('window');

class UpdateProfileMainScreen extends Base
{
    constructor(props){
        super(props);
        this.state = {

        }
        console.log('abcasdfadsf',props)
    }

    renderContent(){
        return(

            <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{height: height*0.8}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View style={{height: height*0.33,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity>
                            <View style={{height:height*0.2,width:height*0.2}}>
                                    <Image
                                        source={require('../../images/img_profile.png')}
                                        style={{height:height*0.2,width:height*0.2,borderRadius:100}}>
                                    </Image>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height*0.1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:30,fontWeight:'bold'}}>
                                Helder, 43
                            </Text>
                        </View>
                        <View style={{height: height*0.1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>
                                Singapore University
                            </Text>
                        </View>
                        <View style={{height: height*0.26}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.49}}>
                                    <View style={{height: height*0.25,alignItems:'center',justifyContent:'center'}}>
                                        <TouchableOpacity>
                                            <View style={{height:height*0.1,width:height*0.1,margin:10}}>
                                                <Image
                                                    source={require('../../images/setting.png')}
                                                    style={{height:height*0.1,width:height*0.1,borderRadius:100}}>
                                                </Image>
                                            </View>
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={{fontSize:20,fontWeight:'bold'}}>SETTINGS</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                <View style={{height:height*0.15,width: width*0.01,backgroundColor: 'grey'}}/>
                                </View>
                                <View style={{width: width*0.49}}>
                                    <View style={{height: height*0.25,alignItems:'center',justifyContent:'center'}}>
                                        <TouchableOpacity>
                                            <View style={{height:height*0.1,width:height*0.1,margin:10}}>
                                                <Image
                                                    source={require('../../images/edit.png')}
                                                    style={{height:height*0.1,width:height*0.1,borderRadius:100}}>
                                                </Image>
                                            </View>
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={{fontSize:20,fontWeight:'bold'}}>EDIT INFO</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


        );
    }

}
module.exports = UpdateProfileMainScreen;

