'use strict';

var React = require('react-native');
import Icon from 'react-native-vector-icons/FontAwesome'

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 20;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var Graphic = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.txtContainer}>
        <Text>
           正在加载图文。。。
        </Text>
      </View>
    );
  },

  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Image style={styles.topImage} source={{uri: movie.posters.thumbnail}}/>
        <Text style={styles.txtTitle}>{movie.title}</Text>
        <Text style={styles.txtContent}>{movie.title}</Text>
        <View style={styles.viewBottom}>
          <Text style={styles.txtContent}>时间：{movie.year}</Text>
        </View>
        <Image source={require('../assets/splite.png')} style={styles.imageSplit}/>
      </View>
    );
  },
});

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
    resizeMode: 'stretch'
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flex:1,
    alignItems: 'flex-end'
  },
  imageSplit: {
    flex:0.3,
    backgroundColor: 'gray'
  }

});

module.exports = Graphic
