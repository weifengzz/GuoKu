'use strict'
//th down
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class CategoryScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <View style={styles.viewIconBack}>
            <Icon name='angle-left' size={25} />
          </View>
          <Text style={styles.txtTitle}>title</Text>
          <Icon name='clock-o' size={25}/>
          <Icon name='angle-down' size={15}/>
          <Icon name='align-justify' size={20} style={styles.iconListStyle}/>
        </View>
        <View style={styles.viewSmallContent}>
          <View style={styles.viewLableContent}>
            <Text style={styles.txtItems}>台灯</Text>
            <Text style={styles.txtItems}>马克杯</Text>
          </View>
          <Text style={styles.colors}>更多</Text>
          <Icon name='angle-right' style={styles.colors} size={20} />
        </View>
        <View style={styles.viewContent}>
        </View>
      </View>
    )
  }
  lvColumnItem () {
    return (
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.viewItemLeft}>
            <Image style={styles.imgItem} source={{uri: ('http://192.168.6.5:8888/getImage?imgName='+commidities.imgPath1)}}/>
          </View>
          <View style={styles.viewItemRight}>
            <Text style={styles.txtItemTitle}>{commidities.title}</Text>
            <Text style={styles.txtItemPrice}>¥{commidities.price}</Text>
            <View style={styles.viewTxtItemLove}>
              <Icon name='ios-heart-outline' style={styles.iconItem} size={15}/>
              <Text style={styles.txtItemLove}>{commidities.love}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  lvRowItem () {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  viewTop: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewSmallContent: {
    borderTopWidth: 1,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  viewIconBack: {
    height: 60,
    width: 59,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1
  },
  txtTitle: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10
  },
  iconListStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  viewLableContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  colors: {
    color: '#6587C1'
  },
  txtItems: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderRadius: 5
  },
  itemContainer: {
    height: 100,
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  viewItemLeft: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewItemRight: {
    flex: 3,
    flexDirection: 'column',
    marginRight: 10
  },
  imgItem: {
    height: 90,
    width: 90,
    resizeMode: 'stretch'
  },
  txtItemTitle: {
    height: 50,
    marginTop: 5,
    fontSize: 16
  },
  txtItemPrice: {
    height: 20,
    fontSize: 15
  },
  viewTxtItemLove: {
    height: 20,
    width: 50,
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },
  txtItemLove: {
    fontSize: 15,
    marginLeft: 5
  },
  iconItem: {
    marginTop: 5
  }
})

module.exports = CategoryScreen
