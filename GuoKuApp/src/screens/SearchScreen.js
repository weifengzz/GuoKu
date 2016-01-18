'use strict';

var React = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons'
import ReacoomendViewPager from './ReacoomendViewPager'

let {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;


class SearchScreen extends React.Component{
  render () {
    return(
      <View style={styles.container}>
        <TouchableHighlight>
          <View style={styles.viewSearch}>
            <View style={styles.viewIcon}>
              <Icon name='search' size={20}/>
            </View>
            <View style={styles.viewText}>
              <TextInput />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  viewSearch: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#F0F0F0',
  },
  viewIcon: {
    flex:1,
    height: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    flex:5,
    height: 50,
    justifyContent: 'center'
  },
});

module.exports = SearchScreen
