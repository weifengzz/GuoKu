'use strict'

import React from 'react-native'

var {
  Animated,
  PropTypes
} = React

class AniImage extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    inputRange: PropTypes.array,
    outputRange: PropTypes.array,
    type: PropTypes.string,
    style: PropTypes.number
  };
  render () {
    var { style, url, inputRange, outputRange, type } = this.props
    this._animatedValue = new Animated.Value(0)
    let interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: inputRange,
      outputRange: outputRange
    })
    if (type === 'image') {
      return (
        <Animated.Image
          onLoadEnd={() => {
            Animated.timing(this._animatedValue, {
              toValue: 100,
              duration: 500
            }).start()
          }}
          source={{uri: url}}
          style={[style, {opacity: interpolatedColorAnimation}]} />
      )
    }
    if (type === 'view') {
      Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 2000
      }).start()
      return (
        <Animated.View style={[style, {opacity: interpolatedColorAnimation}]} />
      )
    }
    if (type === 'text') {
      Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 2000
      }).start()
      return (
        <Animated.Text
          style={[style, {opacity: interpolatedColorAnimation}]} />
      )
    }
    Animated.timing(this._animatedValue, {
      toValue: 100,
      duration: 2000
    }).start()
    return (
      <Animated.View style={[style, {opacity: interpolatedColorAnimation}]} />
    )
  }
}

module.exports = AniImage

