'use strict'

import React from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Commodity from './Commodity'
import Graphic from './Graphic'
import Icon from 'react-native-vector-icons/FontAwesome'
import RecommendScreen from './RecommendScreen'

var {
  Image,
  StyleSheet,
  View,
  PropTypes,
  Text,
  TouchableHighlight
} = React

class MainScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
       component:RecommendScreen,
    }
  }
  render () {
     return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollableTabView>
            <Commodity tabLabel='商品' />
            <Graphic tabLabel='图文' />
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
