'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/FontAwesome'
import AniImage from '../components/AniImage'
import AniRoll from '../components/AniRoll'
var {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  PropTypes
} = React

var REQUEST_URL = 'http://192.168.6.5:8888/getCommidity'

class Commodity extends React.Component {
  static propTypes = {
    navigator: PropTypes.object,
    fetch: PropTypes.func
  };
  constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    fetch (REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true
      })
    })
    .done()
  }

  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <ListView
        initialListSize={3}
        dataSource={this.state.dataSource}
        renderRow={this.renderCommidity.bind(this)}
        style={styles.listView}/>
    )
  }

  renderLoadingView () {
    return (
      <View style={styles.txtContainer}>
       <AniRoll inputRange={[0, 1]} outputRange={['0deg', '10000deg']} style={{width: 50, height: 50}} />
        <Text>
          正在加载图文。。。
        </Text>
      </View>
    )
  }

  renderCommidity (commidities) {
    return (
      <View style={styles.container} >
        <Image style={styles.viewTopImage} source={require('../assets/listbg.png')}>
          <TouchableOpacity onPress={this.toCommodityScreen.bind(this, commidities)}>
            <AniImage
            type={'image'}
            inputRange={[0, 100]}
            outputRange={[0, 1]}
            style={styles.aniImage}
            url={'http://192.168.6.5:8888/getImage?imgName=' + commidities.imgPath1} />
          </TouchableOpacity>
        </Image>
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
  }

  toCommodityScreen (commidities) {
    var commodity = commidities
    let navigator = this.props.navigator
    navigator.push({id: 'CommodityScreen', sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump, passProp: {commodity}})
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff'
  },
  aniImage: {
    height: 330,
    width: null
  },
  viewTopImage: {
    height: 330,
    width: null,
    margin: 10
  },
  txtContent: {
    fontSize: 16,
    marginLeft: 5
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
    backgroundColor: '#F0F0F0'
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
