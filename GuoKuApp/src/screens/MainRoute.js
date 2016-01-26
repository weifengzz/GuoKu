'use strict'

import React from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainScreen from './MainScreen'
import LoginScreen from './UserLRScreen/LoginScreen'
import RecommendScreen from './RecommendScreen'
import SettingScreen from './SettingScreen'

var {
  StyleSheet,
  View,
  TouchableOpacity
} = React

const COLOR = ['gray', '#ffffff']

class MainRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      choice: 1,
      screen: <MainScreen navigator={props.navigator} commodity={props.commodity}/>
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewShow}>
          {this.state.screen}
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.bottomButton} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
            <Icon name='star' size={25} style={[styles.Icon, {color: this.state.choice === 1 ? COLOR[1] : COLOR[0]}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress ={() => this.tabColor(2)} >
            <Icon name='compass' size={25} style={[styles.Icon, {color: this.state.choice === 2 ? COLOR[1] : COLOR[0]}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress ={() => this.tabColor(3)}>
            <Icon name='bell' size={25} style={[styles.Icon, {color: this.state.choice === 3 ? COLOR[1] : COLOR[0]}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress ={() => this.tabColor(4)}>
            <Icon name='cog' size={25} style={[styles.Icon, {color: this.state.choice === 4 ? COLOR[1] : COLOR[0]}]}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  tabColor (num) {
    var navigator = this.props.navigator
    var commodity = this.props.commodity
    if (num === 1) {
      this.setState({choice: 1, screen: <MainScreen navigator={navigator} />})
    }
    if (num === 2) {
      this.setState({choice: 2, screen: <RecommendScreen navigator={navigator} />})
    }
    if (num === 3) {
      this.setState({choice: 3, screen: <LoginScreen navigator={navigator} />})
    }
    if (num === 4) {
      this.setState({choice: 4, screen: <SettingScreen navigator={navigator} />})
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fffff'
  },
  viewShow: {
    flex: 1
  },
  content: {
    flex: 8
  },
  bottom: {
    height: 50,
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
    color: 'white'
  }
})

module.exports = MainRoute
