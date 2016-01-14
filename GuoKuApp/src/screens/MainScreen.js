'use strict'

import React from 'react-native'

var {
  Image,
  StyleSheet,
  View,
  PropTypes,
  Text,
} = React

class MainScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> 主界面 </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FA'
  }
})

module.exports = MainScreen
