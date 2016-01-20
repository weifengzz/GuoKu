'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/Ionicons'

let {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ToastAndroid
} = React

let REQUEST_URL = 'http://192.168.6.5:8888/getCommidity'

class SearchScreen extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      screen: this.initScreen(),
      txtValue: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }
  render () {
    var textValue=this.state.txtValue;
    return (
      <View style={styles.container}>
        <View style={styles.viewSearch}>
          <View style={styles.viewIcon}>
            <Icon name='search' size={30}/>
          </View>
          <View style={styles.viewText}>
            <TextInput
            selectTextOnFocus = {true}
            onChangeText={(text) => {
              this.state.txtValue = text
              this.getContent()
            }}
            value={textValue}
            onBlur = {this.getContent}
            />
          </View>
          <View style={styles.viewCancel}>
            <Text >取消</Text>
          </View>
        </View>
        {this.state.screen}
      </View>
    )
  }

  initScreen () {
    return (
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
    )
  }

  getContent () {
    ToastAndroid.show(this.state.txtValue, ToastAndroid.LONG)
  }

  fetchData (un, pw) {
    fetch(REQUEST_URL, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: un,
      password: pw
    })
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData['isOK']==='ok') {
        ToastAndroid.show('登录成功', ToastAndroid.SHORT)
      } else {
        ToastAndroid.show('登录失败', ToastAndroid.SHORT)
      }
    })
    .done()
  }

  responseData (response) {
    return response.result.data
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
    backgroundColor: '#F0F0F0'
  },
  viewIcon: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    flex: 5,
    height: 50,
    justifyContent: 'center'
  },
  viewCancel: {
    flex: 1,
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
    fontSize: 25
  },
  viewContentBottom: {
    height: 200,
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50
  },
  viewContentBottomContainer: {
    height: 200,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
})

module.exports = SearchScreen
