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

import Global from '../../../common/global';
import Button  from '../../../component/button/index';
import Base from '../../base/index';
var Utils = Global.Utils;
const { width, height }  = Dimensions.get('window');

class MatchPageMainScreen extends Base
{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  renderContent(){
    return(
      <View style={{width: Global.Constants.WIDTH_SCREEN}}>
          {this.renderMainPage()}
      </View>
    );
  }

  renderMainPage(){
    return(
        <View style={{flex: 1,flexDirection: 'column'}}>
            <View>
                <Image
                    source={require('../../../images/img_1.png')}
                    style={{width:width*1,height : height*0.45,marginTop: 10, borderRadius: 20}}>
                    <View style={{marginLeft: 25, flexDirection: 'column', bottom: 20, position: 'absolute'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{'John Kevin'}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{'20 ago'}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>{'Software Engineer'}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>{'Ho Chi Minh City, Vietnam'}</Text>
                    </View>
                    <TouchableOpacity style={{marginTop: Global.Constants.HEIGHT_SCREEN/2 - 100, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Image
                            source={require('../../../images/ic_info.png')}
                            style={{width: 80, height: 80}}>
                        </Image>
                    </TouchableOpacity>
                </Image>
            </View>
            <View style={{height: height*0.2}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: width*0.5}}>
                        <TouchableOpacity>
                        <Image style={{width : '100%',height : '100%',margin:5}} source={require('../../../images/img_1.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: width*0.17,alignItems:'center',justifyContent :'center'}}>
                        <Text style={{fontSize : 30,fontWeight :'bold',color : 'green'}}>25</Text>
                        <Text style={{fontSize : 20,fontWeight :'bold',color : 'red'}}>AGO</Text>
                    </View>
                    <View style={{width: width*0.3}}>
                        <Text style={{fontWeight: 'bold',fontSize: 14}}>
                            1. Conceptual Art: An Introduction With Alessandra Dias
                        </Text>
                        <Text style={{color :'grey',marginTop : 10}}>
                            100 Le Dinh Ly, Ho Chi Minh City
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{height: height*0.12,marginTop : 15}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: width*0.5,alignItems:'center',justifyContent :'center'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../images/ic_nope.png')}
                                style={{width: 80, height: 80}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: width*0.5,alignItems:'center',justifyContent :'center'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../images/ic_like.png')}
                                style={{width: 80, height: 80}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
  }

}
module.exports = MatchPageMainScreen;
