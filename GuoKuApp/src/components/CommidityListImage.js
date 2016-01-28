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
    var { style, url, height, width, inputRange, outputRange } = this.props
    this._animatedValue = new Animated.Value(0)
    let interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: inputRange,
      outputRange: outputRange
    })
    return (
      <Animated.Image
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 100,
            duration: 500
          }).start()
        }}
        source={{uri: url}}
        style={[style, { width: width }, {opacity: interpolatedColorAnimation}, {height: height}]} />
    )
  }
}

module.exports = CommidityListImage

