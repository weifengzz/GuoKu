'use strict'

import React from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Commodity from './Commodity'
import Graphic from './Graphic'

var {
  StyleSheet,
  View,
} = React

class MainScreen extends React.Component {
  render () {
    var navigator = this.props.navigator
    var commodity = this.props.commodity
     return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollableTabView>
            <Commodity tabLabel='商品' navigator={navigator} commodity={commodity}/>
            <Graphic tabLabel='图文' navigator={navigator}/>
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column'
  },
  content: {
    flex: 8
  }
})

module.exports = MainScreen
