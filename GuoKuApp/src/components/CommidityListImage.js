'use strict'

import React from 'react-native'

var {
  Animated,
  PropTypes
} = React

class CommidityListImage extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    inputRange: PropTypes.array,
    outputRange: PropTypes.array
  };
  render () {
    this._animatedValue = new Animated.Value(0)
    let interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: this.props.inputRange,
      outputRange: this.props.outputRange
    })
    return (
      <Animated.Image
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 100,
            duration: 1000
          }).start()
        }}
        source={{uri: this.props.url}}
        style={[{ width: this.props.width }, {opacity: interpolatedColorAnimation}, {height: this.props.height}]} />
    )
  }
}

module.exports = CommidityListImage

