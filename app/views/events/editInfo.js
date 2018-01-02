import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Navigator,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Animated,
    AppRegistry,
    Dimensions,
    Button
}from 'react-native';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons.js'
import ModalDropdown from 'react-native-modal-dropdown';
import Global from '../../common/global';
//import Button  from '../../../component/button/index';
import Base from '../base/index';
var Utils = Global.Utils;
const { width, height }  = Dimensions.get('window');
import MultiSlider from '@ptomasroos/react-native-multi-slider';
//const height  = Dimensions.get('window').height;

class EditInfo extends Component
{
    constructor(props){
        super(props);
        this.state = {
            isHideHeader: true,
            anotherHead: true
        }
    }
    onScrollView(){}

    render() {
        return (
            <View>
                <View>
                    <View style={{height: height*0.09, width: width, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: "#E4E0E0", borderWidth: 1, backgroundColor: '#FFFFFF'}}>
                        <View style={{width: Global.Constants.WIDTH_SCREEN - 110 , height: height*0.09, width: width*0.75, alignSelf: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: "black", fontWeight: "bold", marginLeft: width*0.4}}>Edit Info</Text>
                        </View>
                        <View style={{width: width*0.25, height: height*0.09, alignSelf: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={this} underlayColor={'transparent'} style={{width: width*0.25, justifyContent: 'center'}}>
                                <Text style={{fontSize: 18, color: "grey", fontWeight: "bold", marginLeft: width*0.1}}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {this.renderContent()}
            </View>
        )
    }

    renderContent(){
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', }}>
                    <View style={{width: width, height: height*0.6}}>
                        <View style={{flex: 1, flexDirection: 'column', }}>
                            <View style={{width: width, height: height*0.4}}>
                                <View style={{width: width, height: height*0.4}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: width*0.66, height: height*0.4}}>
                                            <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.66, height: height*0.4}}/>
                                        </View>
                                        <View style={{width: width*0.35, height: height*0.4}}>
                                            <View style={{ flex: 1,flexDirection: 'column',}}>
                                                <View style={{width: width*0.33, height: height*0.2}}>
                                                    <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.33, height: height*0.2}}/>
                                                </View>
                                                <View style={{width: width*0.33, height: height*0.2}}>
                                                    <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.33, height: height*0.2}}/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: width, height: height*0.2}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: width*0.33, height: height*0.2}}>
                                        <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.33, height: height*0.2}}/>
                                    </View>
                                    <View style={{width: width*0.33, height: height*0.2}}>
                                        <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.33, height: height*0.2}}/>
                                    </View>
                                    <View style={{width: width*0.33, height: height*0.2}}>
                                        <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.33, height: height*0.2}}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>About</Text>
                    </View>
                    <View style={{width: width, height: height*0.2, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 18, color: "black", marginLeft: width*0.05, marginTop: height*0.03}}>Meetango app ka kaam ho raha hai is project main aur ye kafi bara project hai aur mujhe is say bht khuch sekhny ko mila hai</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Current Work</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.85, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", marginLeft: width*0.05, marginTop: height*0.03}}>Software Engineer Of Singapore</Text>
                            </View>
                            <View style={{width: width*0.15, height: height*0.1}}>
                                <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.04, marginTop: height*0.035}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>School</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.85, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", marginLeft: width*0.05, marginTop: height*0.03}}>University Of Singapore</Text>
                            </View>
                            <View style={{width: width*0.15, height: height*0.1}}>
                                <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.04, marginTop: height*0.035}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Show My Instagram Photos</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.25, marginTop: height*0.03}}>Connect Instagram</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#F8F8F8'}}>
                        <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>I Am</Text>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.85, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", marginLeft: width*0.05, marginTop: height*0.03}}>Man</Text>
                            </View>
                            <View style={{width: width*0.15, height: height*0.1}}>
                                <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.04, marginTop: height*0.035}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.15, backgroundColor: '#F8F8F8'}} />
                </View>
            </ScrollView>
        )
    }

}

module.exports = EditInfo;
