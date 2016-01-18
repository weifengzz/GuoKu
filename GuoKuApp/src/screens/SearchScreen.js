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
        <View style={styles.viewSearch}>
          <View style={styles.viewIcon}>
            <Icon name='search' size={30}/>
          </View>
          <View style={styles.viewText}>
            <TextInput />
          </View>
          <View style={styles.viewCancel}>
            <Text >取消</Text>
          </View>
        </View>
        <View style={styles.viewContent}>
          <View style={styles.viewContentTop}>
            <Text style={styles.txtSearch}>搜你想要的</Text>
          </View>
          <View style={styles.viewContentBottom}>
            <View style={styles.viewContentBottomContainer}>
              <Icon name='bag' size={50} />
              <Text>商品</Text>
            </View>
            <View style={styles.viewContentBottomContainer}>
              <Icon name='android-apps' size={50} />
              <Text>品类</Text>
            </View>
            <View style={styles.viewContentBottomContainer}>
              <Icon name='android-contacts' size={50} />
              <Text>用户</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    flex:5,
    height: 50,
    justifyContent: 'center'
  },
  viewCancel: {
    flex:1,
    height: 50,
    justifyContent: 'center'
  },
  viewContent: {
    marginTop: 50,
    height: 300
  },
  viewSearchContent: {

  },
  viewContentTop: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtSearch: {
    fontSize: 25,
  },
  viewContentBottom: {
    height: 200,
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
  },
  viewContentBottomContainer: {
    height: 200,
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center'
  }
});

module.exports = SearchScreen
