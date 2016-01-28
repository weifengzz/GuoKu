'use strict'
//th down
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ListView,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

let REQUEST_URL = 'http://192.168.6.5:8888/sortByCategory'

class CategoryScreen extends Component {
  constructor (props) {
    super (props)
    this.state = {
      txtValue: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      dataSource1: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      iconList: true,
      iconListName: 'align-justify'
    }
  }
  responseData (response) {
    return response.result.data
  }
  componentDidMount () {
    setTimeout(() => {
      this.fetchData()
    }, 500)
  }

  fetchData () {
    var category = this.props.category
    fetch (REQUEST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category.category,
        sort: -1
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
        dataSource1: this.state.dataSource1.cloneWithRows(responseData)
      })
    })
    .done()
  }
  changeListStyle () {
    this.fetchData.bind(this)
    if (this.state.iconList) {
      this.setState({
        iconList: false,
        iconListName: 'th'
      })
    } else {
      this.setState({
        iconList: true,
        iconListName: 'align-justify'
      })
    }
  }
  render () {
    var category = this.props.category
    if (!this.state.loaded) {
      return (
        <View style={styles.container}><Text>正在加载。。。</Text></View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <View style={styles.viewIconBack}>
              <Icon name='angle-left' size={25} />
            </View>
          </TouchableOpacity>
          <Text style={styles.txtTitle}>{this.props.category.category}</Text>
          <Icon name='heart-o' size={20}/>
          <Icon name='angle-down' size={15}/>
          <TouchableOpacity onPress={this.changeListStyle.bind(this)}>
            <Icon name={this.state.iconListName} size={20} style={styles.iconListStyle}/>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSmallContent}>
          <View style={styles.viewLableContent}>
            {
              category.smallCategory.map((smallCategory) => (<Text key={smallCategory} style={styles.txtItems}>{smallCategory}</Text>))
            }
          </View>
          <Text style={styles.colors}>更多</Text>
          <Icon name='angle-right' style={styles.colors} size={20} />
        </View>
        <View style={styles.viewContent}>
          {
            this.state.iconList ? (<ListView
              initialListSize={5}
              dataSource={this.state.dataSource}
              renderRow={this.lvColumnItem.bind(this)}/>)
            : (<ListView
              initialListSize={5}
              dataSource={this.state.dataSource1}
              renderRow={this.lvRowItem.bind(this)}
              contentContainerStyle={styles.listView}/>)
          }
        </View>
      </View>
    )
  }
  lvColumnItem (commidities) {
    return (
      <TouchableOpacity onPress={this.gotoCommidityScreen.bind(this, commidities)}>
        <View style={styles.itemContainer}>
          <View style={styles.viewItemLeft}>
            <Image style={styles.imgItem} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commidities.imgPath1)}}/>
          </View>
          <View style={styles.viewItemRight}>
            <Text style={styles.txtItemTitle}>{ commidities.title}</Text>
            <Text style={styles.txtItemPrice}>¥{ commidities.price}</Text>
            <View style={styles.viewTxtItemLove}>
              <Icon name='heart-o' style={styles.iconItem} size={15}/>
              <Text style={styles.txtItemLove}>{ commidities.love}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  lvRowItem (commodity) {
    return (
      <TouchableOpacity onPress={this.gotoCommidityScreen.bind(this, commodity)}>
        <View style={styles.item}>
          <Image style={styles.imgList} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.imgPath1)}}/>
        </View>
      </TouchableOpacity>
    )
  }
  goBack () {
    var navigator = this.props.navigator
    navigator.pop()
  }
  gotoCommidityScreen (commidities) {
    var commodity = commidities
    var navigator = this.props.navigator
    navigator.push({id: 'CommodityScreen', sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump, passProp: {commodity}})
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  listView: {
    width: 380,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F0F0F0'
  },
  imgList: {
    height: 110,
    width: 110,
    resizeMode: 'cover',
    margin: 5
  },
  viewTop: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  viewSmallContent: {
    borderTopWidth: 1,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#E6E6E6'
  },
  viewIconBack: {
    height: 60,
    width: 59,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#E6E6E6'
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
    borderRadius: 5,
    borderColor: '#E6E6E6'
  },
  itemContainer: {
    height: 100,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E6E6E6'
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
    fontSize: 15,
    color: '#6587C1'
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
  },
  viewContent: {
    flex: 1
  }
})

module.exports = CategoryScreen
