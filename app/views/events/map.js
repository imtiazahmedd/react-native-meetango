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
    Animated,
    AppRegistry,
    Dimensions,
    Button
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js'
import ModalDropdown from 'react-native-modal-dropdown';
import Global from '../../common/global';
//import Button  from '../../../component/button/index';
import Base from '../base/index';
var Utils = Global.Utils;
const { width, height }  = Dimensions.get('window');
//const height  = Dimensions.get('window').height;

class MapPageScreen extends Base
{
    constructor(props){
        super(props);
        this.state = {
            isHideHeader: true,
            anotherHead: true,
            isHideFooter: true
        }
    }
    onScrollView(){}
    renderContent(){
        return(
            <View>
                <View style={{flex: 1,flexDirection: 'column'}}>
                    <View style={{marginTop: height*0.02, height: height, width: width}}>
                        <ScrollView>
                            <View>
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "lightgrey", borderWidth: 2}}>
                                    <View style={{width: width*0.55, height: height*0.3}}>
                                        <View style={{flex: 1, flexDirection: 'column'}}>
                                            <View style={{width: width*0.55, height: height*0.09}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "black", fontWeight: "bold"}}>Marian and Maraisa no Villa Country-31 Ago</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center'}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16}}>Villa Country</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "grey"}}>Today, 20:00 - 23:09</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/male.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/woman.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: 50, height: 50}}>
                                                        <Image source={require('../../images/ic_match_page.png')} resizeMode={'contain'} style={{width: 45, height: 45, justifyContent: 'center', allignItem: "center"}}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{width: width*0.45, height: height*0.3}}>
                                        <View style={{width: width*0.45, height: height*0.23, justifyContent: 'center', allignItem: "center"}}>
                                            <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.4, marginTop: height*0.01}}/>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center', allignItem: "center", marginLeft: 50, marginBottom: 20}}>
                                            <Image source={require('../../images/send.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "lightgrey", borderWidth: 2}}>
                                    <View style={{width: width*0.55, height: height*0.3}}>
                                        <View style={{flex: 1, flexDirection: 'column'}}>
                                            <View style={{width: width*0.55, height: height*0.09}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "black", fontWeight: "bold"}}>Marian and Maraisa no Villa Country-31 Ago</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center'}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16}}>Villa Country</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "grey"}}>Today, 20:00 - 23:09</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/male.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/woman.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: 50, height: 50}}>
                                                        <Image source={require('../../images/ic_match_page.png')} resizeMode={'contain'} style={{width: 45, height: 45, justifyContent: 'center', allignItem: "center"}}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{width: width*0.45, height: height*0.3}}>
                                        <View style={{width: width*0.45, height: height*0.23, justifyContent: 'center', allignItem: "center"}}>
                                            <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.4, marginTop: height*0.01}}/>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center', allignItem: "center", marginLeft: 50, marginBottom: 20}}>
                                            <Image source={require('../../images/send.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "lightgrey", borderWidth: 2}}>
                                    <View style={{width: width*0.55, height: height*0.3}}>
                                        <View style={{flex: 1, flexDirection: 'column'}}>
                                            <View style={{width: width*0.55, height: height*0.09}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "black", fontWeight: "bold"}}>Marian and Maraisa no Villa Country-31 Ago</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center'}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16}}>Villa Country</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "grey"}}>Today, 20:00 - 23:09</Text>
                                            </View>
                                            <View style={{width: width*0.55, height: height*0.07}}>
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/male.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: width*0.16, height: height*0.07}}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Image source={require('../../images/woman.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                            </View>
                                                            <View style={{width: width*0.08, height: height*0.07}}>
                                                                <Text style={{paddingTop: height*0.03}}>100</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{width: 50, height: 50}}>
                                                        <Image source={require('../../images/ic_match_page.png')} resizeMode={'contain'} style={{width: 45, height: 45, justifyContent: 'center', allignItem: "center"}}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{width: width*0.45, height: height*0.3}}>
                                        <View style={{width: width*0.45, height: height*0.23, justifyContent: 'center', allignItem: "center"}}>
                                            <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.4, marginTop: height*0.01}}/>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center', allignItem: "center", marginLeft: 50, marginBottom: 20}}>
                                            <Image source={require('../../images/send.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                        </View>
                                    </View>
                                </View><View style={{flex: 1, flexDirection: 'row', borderBottomColor: "lightgrey", borderWidth: 2}}>
                                <View style={{width: width*0.55, height: height*0.3}}>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <View style={{width: width*0.55, height: height*0.09}}>
                                            <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "black", fontWeight: "bold"}}>Marian and Maraisa no Villa Country-31 Ago</Text>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center'}}>
                                            <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16}}>Villa Country</Text>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07}}>
                                            <Text style={{marginTop: height*0.01, marginLeft: width*0.02, fontSize: 16, color: "grey"}}>Today, 20:00 - 23:09</Text>
                                        </View>
                                        <View style={{width: width*0.55, height: height*0.07}}>
                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <View style={{width: width*0.16, height: height*0.07}}>
                                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                                        <View style={{width: width*0.08, height: height*0.07}}>
                                                            <Image source={require('../../images/male.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                        </View>
                                                        <View style={{width: width*0.08, height: height*0.07}}>
                                                            <Text style={{paddingTop: height*0.03}}>100</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{width: width*0.16, height: height*0.07}}>
                                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                                        <View style={{width: width*0.08, height: height*0.07}}>
                                                            <Image source={require('../../images/woman.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                                        </View>
                                                        <View style={{width: width*0.08, height: height*0.07}}>
                                                            <Text style={{paddingTop: height*0.03}}>100</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{width: 50, height: 50}}>
                                                    <Image source={require('../../images/ic_match_page.png')} resizeMode={'contain'} style={{width: 45, height: 45, justifyContent: 'center', allignItem: "center"}}/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: width*0.45, height: height*0.3}}>
                                    <View style={{width: width*0.45, height: height*0.23, justifyContent: 'center', allignItem: "center"}}>
                                        <Image source={require('../../images/img_1.png')} resizeMode={'contain'} style={{width: width*0.4, marginTop: height*0.01}}/>
                                    </View>
                                    <View style={{width: width*0.55, height: height*0.07, justifyContent: 'center', allignItem: "center", marginLeft: 50, marginBottom: 20}}>
                                        <Image source={require('../../images/send.png')} resizeMode={'contain'} style={{width: 35, height: 35}}/>
                                    </View>
                                </View>
                            </View>

                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            //keyword = ''
        }
    }

    checking(){
        console.log("is ka kia karainnnn")
    }

    render(){
        return(
            <View>
                <View>
                    <View style={{height: height*0.09, width: width, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{width: width*0.15, height: height*0.09}}>
                            <TouchableOpacity onPress={this.backMap.bind(this)} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                <Image source={require('../../images/ic_arrow_left.png')} resizeMode={'contain'} style={{width: width*0.10, height: 40, marginTop: 8, marginLeft: 5, justifyContent: 'center'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: Global.Constants.WIDTH_SCREEN - 110 , height: height*0.09, alignSelf: 'center', marginTop: height*0.01, justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: "black", fontWeight: "bold", marginLeft: width*0.08}}>Map OF</Text>
                            <Text style={{fontSize: 16, color: "grey", fontWeight: "bold", marginLeft: width*0.07}}>&emsp;Rajkot</Text>
                        </View>
                    </View>
                </View>
                <MapPageScreen />
            </View>
        );
    }

    backMap(){
    }
}
module.exports = Map;

//<MapPageScreen />

//<View style={{flex: 1,flexDirection: 'column'}}>
//    <View style={{marginTop: 10, height: height*0.06, width: width*0.5, marginLeft: width*0.02}}>
//        <ModalDropdown options={['option 1', 'option 2']} defaultValue='Today' textStyle={{color: "white", fontSize: 16, labelHeight: 32}} style={{width: width*0.3, height: height*0.06, backgroundColor: "red", justifyContent: 'center', paddingLeft: 10, borderRadius: 4 }}>
//        </ModalDropdown>
//    </View>
//</View>
