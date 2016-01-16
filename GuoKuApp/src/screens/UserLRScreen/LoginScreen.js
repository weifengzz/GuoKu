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
            </View>
            <View style={styles.viewLoginBtn}>
              <View style={styles.viewbtn}>
                <Text style={styles.txtLogin}>登录</Text>
              </View>
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
  viewLogin: {
    height: 150,
    backgroundColor: 'yellow'
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
