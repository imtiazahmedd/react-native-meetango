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

class LocationPageMainScreen extends Base
{
    constructor(props){
        super(props);
        this.state = {

        }
    }



    renderContent(){
        return(
                <View style={{flex: 1,flexDirection: 'column'}}>
                    <View style={{height: height*0.2}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3,margin: 10}}>
                                <TouchableOpacity>
                                    <Image source={require('../../images/img_1.png')} style={{width : width*0.3,height : height*0.2,borderRadius : 15}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.45}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height : height*0.07,justifyContent:'center'}}>
                                        <Text style={{fontSize : 15, fontWeight:'bold'}}>Villa Country</Text>
                                    </View>
                                    <View style={{height : height*0.07,justifyContent:'center'}}>
                                        <Text style={{fontSize : 15}}>4.0 ***** (4.674)</Text>
                                    </View>
                                    <View style={{height : height*0.06,justifyContent:'center'}}>
                                        <Text style={{fontSize : 15,fontWeight : 'bold'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.25}}>

                            </View>
                        </View>
                    </View>
                </View>
        );
    }

}
module.exports = LocationPageMainScreen;
