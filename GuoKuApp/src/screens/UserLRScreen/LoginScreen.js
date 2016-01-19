'use strict';

var React = require('react-native');
var FileUpload = require('NativeModules').FileUpload;
var Icon = require('react-native-vector-icons/FontAwesome')
var t = require('tcomb-form-native');

const REQUEST_URL = 'http://192.168.6.5:8888/getUser';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Image,
  ToastAndroid
} = React;

var Form = t.form.Form;
var Person = t.struct({
  userName: t.String,              
  password: t.String,  
});

var options = {
  fields: {
    password: {
      placeholder: '密码',
      password: true,
    },
    userName: {
      placeholder: 'example@xx.com',
      label: '邮箱',
    }
  }
};

var LoginScreen = React.createClass({
  getInitialState: function() {
    return {
      value: {
        userName: null,
        password: null,
        result: null,
      } 
    };
  },
  onPress: function () {
    var value = this.refs.form.getValue();
    if (value) { 
      this.fetchData(value['userName'],value['password'])
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
              <Text style={styles.textRegister}>注册</Text>
            </View>
            <View style={styles.viewRegisterRight}>
              <Icon name='chevron-right' size={30} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.txtTitile}>果库</Text>
          </View>
          <View style={styles.viewLogin}>
           <Form
            ref="form"
            type={Person}
            value={this.state.value}
            options={options} />
          </View>
          <View style={styles.viewLoginBtn}>
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <View style={styles.viewbtn}>
                <Text style={styles.txtLogin}>登录</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.viewLogin3}>
            <View style={styles.viewLogin3Container}>
              <Image source={require('../../assets/login3_1.png')} style={styles.img3Login} />
              <Image source={require('../../assets/login3_2.png')} style={styles.img3Login} />
              <Image source={require('../../assets/login3_3.png')} style={styles.img3Login} />
            </View>
          </View>
        </Image>
      </View>
    );
  },
  fetchData: function(un,pw) {
    fetch(REQUEST_URL, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: un,
      password: pw,
    })
  })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData['isOK']==='ok'){
        ToastAndroid.show('登录成功', ToastAndroid.SHORT)
      }else{
        ToastAndroid.show('登录失败', ToastAndroid.SHORT)
      }
    })
    .done();
  },
  responseData: function(response){
    return response.result.data;
  }
});

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
    fontSize: 20,
    marginTop: 5,
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
  viewLogin: {
    marginLeft: 10,
    marginRight: 10,
    height: 200
  },
  viewLoginBtn: {
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
  txtLogin: {
    fontSize: 20,
    color: '#ffffff'
  },
  viewLogin3: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewLogin3Container: {
    height: 80,
    width: 210,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  img3Login: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 5
  }
});

module.exports = LoginScreen
