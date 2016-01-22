import React from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

let {
  StyleSheet,
  View,
  Text,
  Image
} = React

var Temp = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <Text style={styles.txtTitle}>我</Text>
        </View>
        <View style={styles.viewUser}>
          <View style={styles.viewUserTop}>
            <Image style={styles.imgUserTitle} source={require('../../assets/tx05.png')}/>
          </View>
          <Text style={styles.txtName}>微风zZ</Text>
          <Text style={styles.txtGF}>关注0   |   粉丝0</Text>
          <View style={styles.viewEdit}>
            <Icon name='pencil-square-o' style={styles.iconEdit} size={15}/>
            <Text style={styles.txtEdit}>编辑个人资料</Text>
          </View>
        </View>
      </View>
    )
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewTop: {
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1
  },
  txtTitle: {
    marginLeft: 10
  },
  viewUser: {
    height: 250,
    backgroundColor: 'yellow'
  },
  viewUserTop: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgUserTitle: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  txtName: {
    alignSelf: 'center'
  },
  txtGF: {
    alignSelf: 'center',
    marginTop: 40
  },
  viewEdit: {
    width: 150,
    marginTop: 20,
    height: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  txtEdit: {
    marginLeft: 5,
    alignSelf: 'center',
    color: 'blue'
  },
  iconEdit: {
    color: 'blue',
    marginTop: 5
  }
})

module.exports = Temp
