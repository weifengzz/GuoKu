'use strict';

var React = require('react-native');
import Icon from 'react-native-vector-icons/FontAwesome'

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;


var SettingScreen = React.createClass({

  render: function() {
    return(
      <View style={styles.container}>
        <View style={styles.viewCommon}>
          <View style={styles.viewCommonLeft}>
            <Text style={styles.txt}>微信分享</Text>
          </View>
          <View style={styles.viewCommonRight}>
            <Icon name='chevron-right' size={10}/>
          </View>
        </View>
        <View style={styles.viewCommon}>
          <View style={styles.viewCommonLeft}>
            <Text style={styles.txt}>微博分享</Text>
          </View>
          <View style={styles.viewCommonRight}>
            <Icon name='chevron-right' size={10}/>
          </View>
        </View>
        <View style={styles.splite}/>
        <View style={styles.viewCommon}>
          <View style={styles.viewCommonLeft}>
            <Text style={styles.txt}>清除缓存</Text>
          </View>
          <View style={styles.viewCommonRight}>
            <Icon name='chevron-right' size={10}/>
          </View>
        </View>
        <View style={styles.viewCommon}>
          <View style={styles.viewCommonLeft}>
            <Text style={styles.txt}>意见反馈</Text>
          </View>
          <View style={styles.viewCommonRight}>
            <Icon name='chevron-right' size={10}/>
          </View>
        </View>
        <View style={styles.viewCommon}>
          <View style={styles.viewCommonLeft}>
            <Text style={styles.txt}>版本</Text>
          </View>
          <View style={styles.viewCommonRight}>
            <Text>0.0.1</Text>
          </View>
        </View>
        <View style={styles.viewLogin}>
          <View style={styles.viewCenter}>
            <Text style={styles.txtLogin}>登录</Text>
          </View>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  viewCommon: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    height: 60,
    flexDirection: 'row'
  },
  viewCommonLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20
  },
  viewCommonRight: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'flex-end'
  },
  txt: {
    fontSize: 16
  },
  splite: {
    height: 30,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1
  },
  viewLogin: {
    height: 60,
    margin: 30
  },
  viewCenter: {
    flex: 1,
    backgroundColor: '#4F7EC2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtLogin: {
    fontSize: 20,
    color: '#ffffff'
  }
});

module.exports = SettingScreen
