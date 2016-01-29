'use strict'

import React from 'react-native'

var {
  Image,
  StyleSheet,
  View,
  Animated,
  PropTypes
} = React

class WelcomePage extends React.Component {
  static propTypes = {
    navigator: PropTypes.object
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
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 100,
            duration: 1000
          }).start()
        }}
        source={{uri: 'http://192.168.6.5:8888/getImage?imgName=welcome.jpg'}} style={[styles.img, {opacity: interpolatedColorAnimation}]}/>
      </View>
    )
  }
  componentWillMount () {
    var navigator = this.props.navigator
    setTimeout(() => {
      navigator.replace({
        id: 'MainRoute'
      })
    }, 2000)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  img: {
    flex: 1,
    width: 400,
    height: 200,
    resizeMode: 'contain'
  }
})

module.exports = WelcomePage

