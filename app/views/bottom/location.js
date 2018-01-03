
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

            <View style={{flex: 1,flexDirection: 'column',height:height*1}}>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: width*0.3}}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../images/img_1.png')}
                                    style={{width:width*0.28,height:height*0.2}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: width*0.5}}>
                            <View style={{flex: 1,flexDirection: 'column'}}>
                                <View style={{height: height*0.07,justifyContent : 'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                </View>
                                <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: width*0.07,justifyContent : 'center'}}>
                                            <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                        </View>
                                        <View style={{width: width*0.05,justifyContent : 'center'}}>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../images/star.png')}
                                                    style={{width: 15, height: 15}}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width*0.05,justifyContent : 'center'}}>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../images/star.png')}
                                                    style={{width: 15, height: 15}}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width*0.05,justifyContent : 'center'}}>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../images/star.png')}
                                                    style={{width: 15, height: 15}}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width*0.05,justifyContent : 'center'}}>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../images/star.png')}
                                                    style={{width: 15, height: 15}}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width*0.05,justifyContent : 'center'}}>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../../images/star.png')}
                                                    style={{width: 15, height: 15}}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width*0.5,justifyContent : 'center'}}>
                                            <Text style={{fontWeight:'bold'}}>
                                                (4.676)
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{height: height*0.06,justifyContent : 'center'}}>
                                    <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: width*0.2,justifyContent: 'center',}}>
                            <TouchableOpacity>
                                <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </View>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3}}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/img_1.png')}
                                        style={{width:width*0.28,height:height*0.2}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height: height*0.07,justifyContent : 'center'}}>
                                        <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                    </View>
                                    <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: width*0.07,justifyContent : 'center'}}>
                                                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.5,justifyContent : 'center'}}>
                                                <Text style={{fontWeight:'bold'}}>
                                                    (4.676)
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{height: height*0.06,justifyContent : 'center'}}>
                                        <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.2,justifyContent: 'center',}}>
                                <TouchableOpacity>
                                    <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3}}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/img_1.png')}
                                        style={{width:width*0.28,height:height*0.2}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height: height*0.07,justifyContent : 'center'}}>
                                        <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                    </View>
                                    <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: width*0.07,justifyContent : 'center'}}>
                                                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.5,justifyContent : 'center'}}>
                                                <Text style={{fontWeight:'bold'}}>
                                                    (4.676)
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{height: height*0.06,justifyContent : 'center'}}>
                                        <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.2,justifyContent: 'center',}}>
                                <TouchableOpacity>
                                    <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3}}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/img_1.png')}
                                        style={{width:width*0.28,height:height*0.2}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height: height*0.07,justifyContent : 'center'}}>
                                        <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                    </View>
                                    <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: width*0.07,justifyContent : 'center'}}>
                                                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.5,justifyContent : 'center'}}>
                                                <Text style={{fontWeight:'bold'}}>
                                                    (4.676)
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{height: height*0.06,justifyContent : 'center'}}>
                                        <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.2,justifyContent: 'center',}}>
                                <TouchableOpacity>
                                    <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3}}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/img_1.png')}
                                        style={{width:width*0.28,height:height*0.2}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height: height*0.07,justifyContent : 'center'}}>
                                        <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                    </View>
                                    <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: width*0.07,justifyContent : 'center'}}>
                                                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.5,justifyContent : 'center'}}>
                                                <Text style={{fontWeight:'bold'}}>
                                                    (4.676)
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{height: height*0.06,justifyContent : 'center'}}>
                                        <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.2,justifyContent: 'center',}}>
                                <TouchableOpacity>
                                    <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: height*0.24,borderBottomColor:'grey',borderBottomWidth:1}}>
                    <View style={{height:height*0.2,margin:10}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.3}}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/img_1.png')}
                                        style={{width:width*0.28,height:height*0.2}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5}}>
                                <View style={{flex: 1,flexDirection: 'column'}}>
                                    <View style={{height: height*0.07,justifyContent : 'center'}}>
                                        <Text style={{fontWeight:'bold',fontSize : 20}}>Villa Country</Text>
                                    </View>
                                    <View style={{ height: height*0.07, justifyContent : 'center'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: width*0.07,justifyContent : 'center'}}>
                                                <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>4.0</Text>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.05,justifyContent : 'center'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        source={require('../../images/star.png')}
                                                        style={{width: 15, height: 15}}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: width*0.5,justifyContent : 'center'}}>
                                                <Text style={{fontWeight:'bold'}}>
                                                    (4.676)
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{height: height*0.06,justifyContent : 'center'}}>
                                        <Text style={{fontSize : 18,color : 'grey'}}>Negocio Lovcal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width*0.2,justifyContent: 'center',}}>
                                <TouchableOpacity>
                                    <View style={{height : height*0.05, width : width*0.14,borderWidth:2,borderColor :'red',justifyContent : 'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'bold',color :'red'}}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>


        );
    }

}
module.exports = LocationPageMainScreen;

