'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/Ionicons'

let {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ToastAndroid
} = React

let REQUEST_URL = 'http://192.168.6.5:8888/search'

class SearchScreen extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      txtValue: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }
  render () {
    var textValue = this.state.txtValue
    if (textValue === null || textValue === ''){
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
                }
              }
              value={textValue}
              onBlur = {this.getContent}
              />
            </View>
            <TouchableHighlight onPress={() => { this.returnBack() }}>
              <View style={styles.viewCancel}>
                <Text >取消</Text>
              </View>
            </TouchableHighlight>
          </View>
          {
            this.contentScreen()
          }
        </View>
      )
    }else{
      return(
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
                }
              }
              value={textValue}
              />
            </View>
            <TouchableHighlight onPress={() => { this.returnBack() }}>
              <View style={styles.viewCancel}>
                <Text >取消</Text>
              </View>
            </TouchableHighlight>
          </View>
          {
            <ListView
              initialListSize={5}
              dataSource={this.state.dataSource}
              renderRow={this.renderCommidity}
              style={styles.listView}/>
          }
        </View>
      )
    }
  }

  contentScreen () {
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
    this.fetchData()
    this.setState({})
  }
  returnBack () {
    var navigator = this.props.navigator
    navigator.pop()
  }
  fetchData () {
    fetch(REQUEST_URL, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: this.state.txtValue
    })
  })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true
      })
    })
    .done()
  }

  responseData (response) {
    return response.result.data
  }

  renderCommidity (commidities) {
    return (
       <View style={styles.itemContainer}>
        <View style={styles.viewItemLeft}>
          <Image style={styles.imgItem} source={{uri: ('http://192.168.6.5:8888/getImage?imgName='+commidities.imgPath1)}}/>
        </View>
        <View style={styles.viewItemRight}>
          <Text style={styles.txtItemTitle}>{commidities.title}</Text>
          <Text style={styles.txtItemPrice}>¥{commidities.price}</Text>
          <View style={styles.viewTxtItemLove}>
            <Icon name="ios-heart-outline" style={styles.iconItem} size={15}/>
            <Text style={styles.txtItemLove}>{commidities.love}</Text>
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

module.exports = SearchScreen
