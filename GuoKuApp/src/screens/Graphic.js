'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/FontAwesome'

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React

var REQUEST_URL = 'http://192.168.6.5:8888/getGraphic'
var Image_URL = 'http://192.168.6.5:8888/getImage?imgName='

var Graphic = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    }
  },

  componentDidMount: function() {
    this.fetchData()
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        })
      })
      .done()
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <ListView
        initialListSize={5}
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
    )
  },

  renderLoadingView: function() {
    return (
      <View style={styles.txtContainer}>
        <Text>
           正在加载图文。。。
        </Text>
      </View>
    )
  },

  renderMovie: function(graphics) {
    return (
      <View style={styles.container}>
        <Image style={styles.topImage} source={{uri: ('http://192.168.6.5:8888/getImage?imgName='+graphics.imgPath)}}/>
        <Text style={styles.txtTitle}>{graphics.title}</Text>
        <Text style={styles.txtContent}>{graphics.title}</Text>
        <View style={styles.viewBottomContent}>
          <View style={styles.viewBottom}>
            <Icon name='clock-o' size={20} />
            <Text style={styles.txtContent}>{graphics.date}</Text>
          </View>
        </View>
        <Image source={require('../assets/splite.png')} style={styles.imageSplit}/>
      </View>
    )
  },
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
    height: 300,
    flex: 1,
    margin: 10,
    resizeMode: 'cover'
  },
  txtTitle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex:1,
    fontSize: 20,
    color: 'black'
  },
  txtContent: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex:1,
    fontSize: 16
  },
  txtBottom: {
    flex:1,
    fontSize: 12,
  },
  viewBottom: {
    flex:1,
    flexDirection: 'row'
  },
  imageSplit: {
    flex:0.3,
    backgroundColor: 'gray'
  },
  viewBottomContent: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex:1,
    alignItems: 'flex-end'
  }
})

module.exports = Graphic
