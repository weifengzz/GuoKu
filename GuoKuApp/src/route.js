import React from 'react-native'
import WelcomeScreen from './screens/WelcomeScreen'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import PersonScreen from './screens/PersonScreen'

var {
  Text,
  View,
  Navigator,
  TouchableOpacity,
  PropTypes,
  Platform
} = React

class Route extends React.Component {
  static propTypes = {
    navigator: PropTypes.object
  };
  render () {
    return (
      <Navigator
        initialRoute={{id: Platform.OS === 'ios' ? 'MainScreen' : 'WelcomeScreen', name: 'Index'}}
        renderScene={ this.renderScene }
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight
        }} />
    )
  }

  renderScene (route, navigator) {
    var routeId = route.id
    if (routeId === 'WelcomeScreen') {
      return (
        <WelcomeScreen
          navigator={navigator} />
      )
    }
    if (routeId === 'AboutScreen') {
      return (
        <AboutScreen
          navigator={navigator} />
      )
    }
    if (routeId === 'LoginScreen') {
      return (
        <LoginScreen
          navigator={navigator} />
      )
    }
    if (routeId === 'MainScreen') {
      return (
        <MainScreen
          navigator={navigator} />
      )
    }
    if (routeId === 'PersonScreen') {
      return (
        <PersonScreen
          navigator={navigator} />
      )
    }
    return this.noRoute(navigator)
  }

  noRoute (navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Route
