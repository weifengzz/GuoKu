import React from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


let {
  Image,
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight
} = React

class LoginScreen extends React.Component{
    render () {
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
            </View>
            <View style={styles.viewRegisterBtn}>
              <View style={styles.viewbtn}>
                <Text style={styles.txtRegister}>注册</Text>
              </View>
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
    }
};

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
  viewRegister: {
    height: 200,
    backgroundColor: 'yellow'
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
    justifyContent: 'flex-end',
    backgroundColor: 'green'
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
});

module.exports = LoginScreen
