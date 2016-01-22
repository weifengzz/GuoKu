'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/FontAwesome'

var {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} = React

var REQUEST_URL = 'http://192.168.6.5:8888/getCommidity'

var Commodity = React.createClass({

  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  },

  componentDidMount: function () {
    this.fetchData()
  },

  fetchData: function () {
    fetch (REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true
        })
      })
      .done()
  },

  render: function () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <ListView
        initialListSize={3}
        dataSource={this.state.dataSource}
        renderRow={this.renderCommidity}
        style={styles.listView}/>
    )
  },

  renderLoadingView: function () {
    return (
      <View style={styles.txtContainer}>
        <Text>
          正在加载图文。。。
        </Text>
      </View>
    )
  },

  renderCommidity: function (commidities) {
    return (
      <View style={styles.container}>
        <View style={styles.viewTopImage}>
          <TouchableOpacity onPress={() => { this.toCommodityScreen(commidities) }}>
            <Image style={styles.topImage} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commidities.imgPath1)}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTxtContent}>
          <TouchableOpacity>
            <Text style={styles.txtContent}>{commidities.title}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBottom}>
          <View style={styles.viewBottomLeft}>
            <Icon name='heart-o' size={20} />
            <Text style={styles.txtContent} >{commidities.love}</Text>
          </View>
          <View style={styles.viewBottomRight}>
            <View style={styles.viewBottomRightContainer}>
              <Icon name='clock-o' size={20} />
              <Text style={styles.txtContent} >{commidities.date}</Text>
            </View>
          </View>
        </View>
        <Image source={require('../assets/splite.png')} style={styles.imageSplit}/>
      </View>
    )
  },

  toCommodityScreen: function (commidities) {
    var commodity = commidities
    navigator = this.props.navigator
    navigator.push({id: 'CommodityScreen', sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump, passProp: {commodity}})
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topImage: {
    height: 330,
    resizeMode: 'cover'
  },
  viewTopImage: {
    height: 330,
    flex: 1,
    margin: 10
  },
  txtContent: {
    fontSize: 16
  },
  viewTxtContent: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex: 1
  },
  txtBottom: {
    flex: 1,
    fontSize: 12
  },
  viewBottom: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row'
  },
  imageSplit: {
    flex: 0.3,
    backgroundColor: 'gray'
  },
  numberText: {
    fontSize: 15,
    marginLeft: 20
  },
  viewBottomLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  viewBottomRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  viewBottomRightContainer: {
    flex: 1,
    flexDirection: 'row'
  }
})

module.exports = Commodity

