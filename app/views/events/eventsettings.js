import React,{Component} from 'react';
import { View,
    Image,
    Text,
    Navigator,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Animated,
    AppRegistry,
    Dimensions,
    Button,
    Switch
}
    from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const { height, width} = Dimensions.get('window');
import Global from '../../common/global';
var Utils = Global.Utils;

class EventSettingsPageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableIndex: 0,
            multiSliderValue: [0, 30]
        }
    }

    render() {
        return (
            <View>
                <View>
                    <View style={{height: height*0.09, width: width, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{width: width*0.15, height: height*0.09}}>
                            <TouchableOpacity onPress={this.props.onPop} underlayColor={'transparent'} style={{width: width*0.15, justifyContent: 'center'}}>
                                <Image source={require('../../images/ic_arrow_left.png')} resizeMode={'contain'} style={{width: width*0.10, height: 40, marginTop: 8, marginLeft: 5, justifyContent: 'center'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: Global.Constants.WIDTH_SCREEN - 110 , height: height*0.09, alignSelf: 'center', marginTop: height*0.01, justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.08}}>Settings</Text>
                        </View>
                    </View>
                </View>
                {this.renderContent()}
            </View>
        )

    }

    renderContent(){
        return (
            <ScrollView
                ref='_scrollview'
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                onScroll={this.onScrollView.bind(this)}>
                    <View style={{flex: 1, flexDirection: 'column' }}>
                        <View style={{width: width, height: height*0.1, borderBottomColor: "grey", borderWidth: 1}}>
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
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Age Range</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginRight: width*0.05, marginTop: height*0.03}}>18-30</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.05}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1,marginTop: height*0.01, marginLeft: width*0.06, justifyContent: 'center', allignItem: "center"}}>
                                    <MultiSlider
                                        values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
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
                        <View style={{width: width, height: height*0.1, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}} />
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Show me or not in events</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}}>
                            <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>NOTIFICATIONS</Text>
                        </View>
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>New Matches</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1, borderBottomColor: "grey", borderWidth: 1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Messages</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 18, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>New events of Venues i follow</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1, borderBottomColor: "grey", borderWidth: 1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Vibration</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Sound</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Switch style={{marginRight: width*0.05, marginTop: height*0.03}} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}}>
                            <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>CONTACT US</Text>
                        </View>
                        <View style={{width: width, height: height*0.06, backgroundColor: "lightblue"}} />
                        <View style={{width: width, height: height*0.1, borderBottomColor: "grey", borderWidth: 1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Help and talk to us</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.06, marginTop: height*0.035}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1, backgroundColor: "lightblue"}}>
                            <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>LEGAL</Text>
                        </View>
                        <View style={{width: width, height: height*0.1, borderBottomColor: "grey", borderWidth: 1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Privacy Policy</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.06, marginTop: height*0.035}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: width*0.8, height: height*0.1}}>
                                    <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.05, marginTop: height*0.03}}>Terms of Service</Text>
                                </View>
                                <View style={{width: width*0.2, height: height*0.1}}>
                                    <Image source={require('../../images/image1.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginLeft: width*0.06, marginTop: height*0.035}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{width: width, height: height*0.06, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}} />
                        <View style={{width: width, height: height*0.1}}>
                            <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.4, marginTop: height*0.03}}>Logout</Text>
                        </View>
                        <View style={{width: width, height: height*0.15, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}}>
                            <Image source={require('../../images/img_logo.png')} resizeMode={'contain'} style={{width: width*0.4, height: height*0.1, marginLeft: width*0.3}}/>
                            <Text style={{fontSize: 20, color: "grey", fontWeight: "bold", marginLeft: width*0.33}}>Version 1.1.0</Text>
                        </View>
                        <View style={{width: width, height: height*0.1}}>
                            <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: width*0.3, marginTop: height*0.03}}>Delete  Account</Text>
                        </View>
                        <View style={{width: width, height: height*0.15, backgroundColor: "lightblue", borderBottomColor: "grey", borderWidth: 1}} />
                    </View>
            </ScrollView>
        )
    }
    onScrollView(){}
    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }
}
module.exports = EventSettingsPageScreen;
