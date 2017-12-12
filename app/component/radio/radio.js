/**
*
* Radio Component
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/
import React,{Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback
}from 'react-native';

var window = Dimensions.get('window');
var styles = require('./radio_style');
var Global = require('../../common/global');
class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { color, isSelected, selectedColor } = this.props;

    let innerCircle;
    let appliedColor;

    if (isSelected) {
      appliedColor = selectedColor;
      innerCircle = <View style={[styles.innerCircle, { backgroundColor: appliedColor }]}/>;
    } else {
      appliedColor = color;
      innerCircle = null;
    }

    return (
      <View style={{ padding: 10 }}>
        <View style={[styles.outerCircle, { borderColor: appliedColor }]}>
          {innerCircle}
        </View>
      </View>
    );
  }
}

Circle.propTypes = {
  color: React.PropTypes.string,
  selectedColor: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
};

Circle.defaultProps = {
  isSelected: false
};

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1 }
  }

  _onSelect(index) {
    var { onSelect } = this.props;
    this.setState({
      selectedIndex: index
    });
    onSelect(index);
  }

  render() {
    var { selectedIndex } = this.state;
    //var targetIndex = selectedIndex !== -1? selectedIndex : this.props.defaultSelect;
    var targetIndex = this.props.defaultSelect;
    console.log(targetIndex);
    var children = React.Children.map(this.props.children, (child, index) => {
      if (child.type === Option) {
        return React.cloneElement(child, {
          onPress: () => this._onSelect(index),
          isSelected: index == targetIndex
        });
      }

      return child;
    });

    return (
      <View>
        {children}
      </View>
    );
  }
}

Radio.propTypes = {
  onSelect: React.PropTypes.func.isRequired,
  defaultSelect: React.PropTypes.number,
  selectedIndex:React.PropTypes.number,
};

Radio.defaultProps = {
  defaultSelect: -1,

};

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { onPress, isSelected, color, selectedColor, children } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          <Circle color={color} selectedColor={selectedColor} isSelected={isSelected}/>
          <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center',width: null,}}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Option.propTypes = {
  onPress: React.PropTypes.func,
  isSelected: React.PropTypes.bool,
  color: React.PropTypes.string,
  selectedColor: React.PropTypes.string
};

Radio.Option = Option;
module.exports = Radio;
