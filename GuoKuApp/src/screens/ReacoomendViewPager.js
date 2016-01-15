'use strict';

var React = require('react-native');

let {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;


class RecommendScreen extends React.Component{
  render () {
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/vp2.png')}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
  }
});

module.exports = RecommendScreen
