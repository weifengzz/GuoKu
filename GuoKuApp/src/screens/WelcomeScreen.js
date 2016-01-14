'use strict'

import React from 'react-native'
import MainScreen from './MainScreen'

var {
  Image,
  StyleSheet,
  View,
  PropTypes
} = React

class WelcomePage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/welcome.png')} style={styles.img} />
      </View>
    )
  }
  componentWillMount () {
    var navigator = this.props.navigator
    setTimeout(() => {
      navigator.replace({
        id: 'MainScreen'
      })
    }, 2000)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FA'
  },
  img: {
    width: null,
    alignSelf: 'stretch',
    resizeMode: 'contain'
  }
})

module.exports = WelcomePage
