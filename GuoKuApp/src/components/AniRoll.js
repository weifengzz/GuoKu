'use strict'

import React from 'react-native'

var {
  Animated,
  PropTypes
} = React

class AniRoll extends React.Component {
  static propTypes = {
    img: PropTypes.string,
    inputRange: PropTypes.array,
    outputRange: PropTypes.array
  };
  render () {
    var { style, img, inputRange, outputRange } = this.props
    this._animatedValue = new Animated.Value(0)
    var interpolatedRotateAnimation = this._animatedValue.interpolate({
      inputRange: inputRange,
      outputRange: outputRange
    })
    Animated.timing(this._animatedValue, {
      toValue: 0,
      duration: 10000
    }).start()
    return (
      <Animated.Image
        source={require('../assets/tx05.jpg')}
        style={[style, {transform: [{rotate: interpolatedRotateAnimation}]}]} />
    )
  }
}

module.exports = AniRoll

