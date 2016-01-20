import React from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import t from 'tcomb-form-native'
const REQUEST_URL = 'http://192.168.6.5:8888/register'

let {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ToastAndroid
} = React

var Form = t.form.Form
var Person = t.struct({
  userName: t.String,
  password: t.String,
  name: t.String
})
var options = {
  fields: {
    password: {
      placeholder: '密码',
      password: true,
      label: '密码'
    },
    userName: {
      placeholder: 'example@xx.com',
      label: '邮箱'
    },
    name: {
      placeholder: '昵称',
      label: '昵称'
    }
  }
}

var LoginScreen = React.createClass({
  getInitialState: function() {
    return {
      value: {
        userName: null,
        password: null,
        name: null,
        result: null,
      } 
    }
  },
  onPress: function () {
    var value = this.refs.form.getValue()
    if (value) { 
      this.fetchData(value['userName'],value['password'],value['name'])
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.imgBg} source={require('../../assets/RegisterLoginbg.jpg')}>
          <View style={styles.viewTop}>
            <View style={styles.viewClose}>
              <Icon name='times' size={30} style={styles.icon}/>
            </View>
            <View style={styles.viewRegisterleft}>
              <Text style={styles.textRegister}>去登录</Text>
            </View>
            <View style={styles.viewRegisterRight}>
              <Icon name='chevron-right' size={30} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.txtTitile}>果库</Text>
          </View>
          <View style={styles.viewRegister}>
            <Form
              ref="form"
              type={Person}
              value={this.state.value}
              options={options} />
          </View>
          <View style={styles.viewRegisterBtn}>
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <View style={styles.viewbtn}>
                <Text style={styles.txtRegister}>注册</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.viewTxtBottom}>
            <View style={styles.viewText}>
              <Text style={styles.txtBottomLeft}>使用果库，表示你已经同意</Text>
              <Text style={styles.txtBottomRight}>使用协议</Text>
            </View>
          </View>
        </Image>
      </View>
    )
  },
  fetchData: function(un,pw,nm) {
    fetch(REQUEST_URL, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: un,
      password: pw,
      name: nm,
    })
  })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData['isOK']==='ok'){
        ToastAndroid.show('注册成功', ToastAndroid.SHORT)
      }else{
        ToastAndroid.show('注册失败', ToastAndroid.SHORT)
      }
    })
    .done()
  },
  responseData: function(response){
    return response.result.data
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  viewTop: {
    height: 50,
    flexDirection: 'row'
  },
  viewClose: {
    flex: 8,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  viewRegisterRight: {
    flex: 1,
    marginRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  textRegister: {
    fontSize: 15,
    marginTop: 10,
    color: '#ffffff'
  },
  viewRegisterLeft: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    color: '#ffffff'
  },
  viewTitle: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTitile: {
    fontSize: 50,
    color: '#ffffff'
  },
  viewRegister: {
    height: 250,
    marginLeft: 10,
    marginRight: 10
  },
  viewRegisterBtn: {
    height:100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewbtn: {
    height: 60,
    width: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.5
  },
  txtRegister: {
    fontSize: 20,
    color: '#ffffff'
  },
  viewTxtBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  viewText: {
    height: 30,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBottomLeft:{
    fontSize: 15
  },
  txtBottomRight: {
    fontSize: 15,
    textDecorationLine: 'underline'
  }
})

module.exports = LoginScreen
