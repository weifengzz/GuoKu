'use strict'

import React from 'react-native'
var MyImage = require('react-native-image-progress')
var ProgressBar = require('react-native-progress/Bar')
var AnimatedImplementation = require('AnimatedImplementation')

var {
  StyleSheet,
  Animated,
  PropTypes
} = React
var Images = AnimatedImplementation.createAnimatedComponent(MyImage)

class ProgressImage extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  };
  constructor (props) {
    super(props)
    this.state = {
      styleOpa: 1
    }
  }
  render () {
    this._animatedValue = new Animated.Value(0)
    let interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1]
    })
    return (
      <Images
      indicator={ProgressBar}
      source={{uri: this.props.url}}
      onLoad={() => {
        this.setState({
          styleOpa: interpolatedColorAnimation
        })
        Animated.timing(this._animatedValue, {
          toValue: 100,
          duration: 500
        }).start()
      }}
      style={[styles.img, { width: this.props.width }, {opacity: this.state.styleOpa}, {height: this.props.height}]} />
    )
  }
}

var styles = StyleSheet.create({
  img: {
    flex: 1
  }
})

module.exports = ProgressImage

/**

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
*/
