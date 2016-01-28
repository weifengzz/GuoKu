'use strict'

import React from 'react-native'
var MyImage = require('react-native-image-progress')
var ProgressBar = require('react-native-progress/Bar')

var {
  StyleSheet,
  View,
  Animated,
  PropTypes
} = React

class CommidityListImage extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  };
  render () {
    this._animatedValue = new Animated.Value(0)
    let interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: [10, 100],
      outputRange: [0, 1]
    })
    return (
      <View style={styles.container}>
        <Animated.Image
        indicator={ProgressBar}
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 100,
            duration: 1000
          }).start()
        }}
        source={{uri: this.props.url}}
        style={[styles.img, {opacity: interpolatedColorAnimation}, { width: this.props.width }, {height: this.props.height}]} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'cover'
  }
})

module.exports = CommidityListImage

