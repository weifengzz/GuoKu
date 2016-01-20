import React from 'react-native'
import WelcomeScreen from './screens/WelcomeScreen'
import MainRoute from './screens/MainRoute'
import RegisterScreen from './screens/UserLRScreen/RegisterScreen'
import LoginScreen from './screens/UserLRScreen/LoginScreen'

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
        initialRoute={{id: Platform.OS === 'ios' ? 'MainRoute' : 'WelcomeScreen', name: 'Index'}}
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
    if (routeId === 'MainRoute') {
      return (
        <MainRoute
          navigator={navigator} />
      )
    }
    if (routeId === 'RegisterScreen') {
      return (
        <RegisterScreen
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
