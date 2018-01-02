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

class EventPageMainScreen extends Base
{
    constructor(props){
        super(props);
        this.state = {
            isHideHeader: true,
            anotherHead: true
        }
    }
    onScrollView(){}

}

class ModalList extends Component
{
    constructor(props){
        super(props);
        this.state = {
            sliderOneValue: [5]
        }
    }
    //onScrollView(){}
    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }

        //, borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: '#E4E0E0'

    render(){
        return (
            <ScrollView style={{height: height*1.5, width: width}}>
                <View style={{flex: 1, flexDirection: 'column' }}>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: '#E4E0E0'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.7, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Gender</Text>
                            </View>
                            <View style={{width: width*0.18, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Male</Text>
                            </View>
                            <View style={{width: width*0.12, height: height*0.1}}>
                                <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop: height*0.035, marginRight: width*0.03}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.7, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Distance</Text>
                            </View>
                            <View style={{width: width*0.3, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.07, marginTop: height*0.03}}>21 km</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.05, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1,marginTop: height*0.01, marginLeft: width*0.06, justifyContent: 'center', allignItem: "center"}}>
                                <MultiSlider
                                    values={this.state.sliderOneValue}
                                    sliderLength={280}
                                    onValuesChange={this.multiSliderValuesChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                    allowOverlap
                                    snapped />
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0"}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.01}}>Today</Text>
                                <Text style={{fontSize: 16, color: "grey", fontWeight: "", marginLeft: width*0.05}}>31 de ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.01}}>Tomorrow</Text>
                                <Text style={{fontSize: 16, color: "grey", fontWeight: "", marginLeft: width*0.05}}>1 de set</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.01}}>This Weekend</Text>
                                <Text style={{fontSize: 16, color: "grey", fontWeight: "", marginLeft: width*0.05}}>2 de set -10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: '#E4E0E0'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.01}}>Next Week</Text>
                                <Text style={{fontSize: 16, color: "grey", fontWeight: "", marginLeft: width*0.05}}>4 de set -10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width, height: height*0.1, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.8, height: height*0.1}}>
                                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.01}}>Next Weekend</Text>
                                <Text style={{fontSize: 16, color: "grey", fontWeight: "", marginLeft: width*0.05}}>9 de set -10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

}


class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible : false,
        }
        this.callFunc = this.callFunc.bind(this);
    }

    cardOpen(){
        this.setState({isModalVisible:false});
        console.log(this.state.isModalVisible, "ho gya open")
    }

    cardClose(){
        this.setState({isModalVisible:true});
        console.log(this.state.isModalVisible, "ho gya close")
    }

    callFunc(){
        if(this.state.isModalVisible){
            this.cardOpen();
        }else{
            this.cardClose();
        }
    }

    render(){
        return(
            <View>
                <View>
                    <View style={{height: height*0.09, width: width, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF'}}>
                        <View style={{width: width*0.15, height: height*0.09}}>
                            <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                <Image source={require('../../images/ic_arrow_left.png')} resizeMode={'contain'} style={{width: width*0.10, height: 40, marginTop: 8, marginLeft: 5, justifyContent: 'center'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: Global.Constants.WIDTH_SCREEN - 110 , height: height*0.09, alignSelf: 'center', marginTop: height*0.01, justifyContent: 'center'}}>
                            <TextInput
                                style={{width: Global.Constants.WIDTH_SCREEN - 110, alignSelf: 'center', height: height*0.07, marginTop: height*0.01, borderColor: "grey", borderWidth: 1, borderRadius: 4}}
                                value={this.state.keyword}
                                onChangeText={(value)=>{this.setState({keyword: value})}}
                                />
                            <View style={{position: 'absolute', alignSelf: 'center', flexDirection: 'row', marginTop: 7}}>
                                <Image
                                    source={require('../../images/ic_search_placeholder.png')}
                                    style={{width: height*0.03, height: height*0.03, marginTop: 7}}>
                                </Image>
                                <Text style={{paddingLeft: 10, color: '#95989A', marginTop: 7}}>{'Search'}</Text>
                            </View>
                        </View>
                        <View style={{width: width*0.15, height: height*0.09, justifyContent: 'center', alignSelf: 'center'}}>
                            <TouchableOpacity onPress={this.eventSettings.bind(this)} underlayColor={'transparent'} style={{width: 60, justifyContent: 'center'}}>
                                <Image source={require('../../images/ic_filter.png')} resizeMode={'contain'} style={{width: 55, height: 55, marginTop: 8, marginRight: 8}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: height*0.08, width: width, backgroundColor: "#FFFFFF", borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#FFFFFF"}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{marginTop: 10, height: height*0.06, width: width*0.3, marginLeft: width*0.02, backgroundColor: 'yellow'}}>
                            <Button onPress={()=>{ this.callFunc(); }} title="Today" color="#841584" style={{flex: 1, backgroundColor: 'blue'}} />
                        </View>
                    </View>
                    </View>
                </View>
                {this.renderContent()}
                <EventPageMainScreen />
            </View>
        );
    }

    renderContent(){
        return(
            <View style={{ height: height*0.7}}>
                {this.state.isModalVisible &&
                   <ModalList />}
            <ScrollView style={{ height: height*0.7}}>
                <View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View style={{ width: width}}>
                            <View>
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                                <View style={{flex: 1, flexDirection: 'row', borderBottomColor: "#E4E0E0", borderWidth: 1, borderTopColor: "#E4E0E0", backgroundColor: '#FFFFFF'}}>
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
                        </View>
                    </View>
                </View>
            </ScrollView>
                </View>
        )
    }

    eventSettings(){
        this.props.navigator.replace({
            id: Global.Constants.EDIT_INFO_ROUTE_ID

        });
    }
}

module.exports = Event;
//EVENT_SETTING_ROUTE_ID
//MAP_PAGE_ROUTE_ID
//EDIT_INFO_ROUTE_ID