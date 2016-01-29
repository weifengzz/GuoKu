'use strict'

import React from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Commodity from './Commodity'
import Graphic from './Graphic'
import BackPress from '../components/back'

var {
  StyleSheet,
  View,
  PropTypes
} = React

class MainScreen extends React.Component {
  static propTypes = {
    navigator: PropTypes.object,
    graphics: PropTypes.object
  };
  constructor (props) {
    super(props)
    BackPress.back(true)
  }

  render () {
    var navigator = this.props.navigator
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollableTabView>
            <Commodity tabLabel='商品' navigator={navigator}/>
            <Graphic tabLabel='图文' navigator={navigator}/>
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  content: {
    flex: 8
  }
})

module.exports = MainScreen
