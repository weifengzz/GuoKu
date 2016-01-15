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
        <View style={styles.bottom}>
          <View style={styles.bottomButton}>
            <TouchableHighlight >
              <Icon name='star' size={25} style={styles.Icon}/>
            </TouchableHighlight>
          </View>
          <View style={styles.bottomButton}>
            <TouchableHighlight>
              <Icon name='compass' size={25} style={styles.Icon}/>
            </TouchableHighlight>
          </View>
          <View style={styles.bottomButton}>
            <TouchableHighlight>
              <Icon name='bell' size={25} style={styles.Icon}/>
            </TouchableHighlight>
          </View>
          <View style={styles.bottomButton}>
            <TouchableHighlight>
              <Icon name='user' size={25} style={styles.Icon}/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
  mainToRecommend(){
    return (
      <RecommendScreen/>
    )
  }
  toRecommendScreen(){
    this.setState({
      dataSource: this.mainToRecommend(),
    })
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column'
  },
  content: {
    flex: 8
  },
  bottom: {
    flex:0.8,
    height:40,
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  buttonImage: {
    height: 30,
    width: 50
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon: {
    color: 'white',
  }
})

module.exports = MainScreen