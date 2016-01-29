'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/FontAwesome'
import ViewPager from 'react-native-viewpager'
import BackPress from '../components/back'

let {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ListView,
  TouchableOpacity,
  Navigator,
  ToastAndroid,
  PropTypes
} = React

const REQUEST_URL = 'http://192.168.6.5:8888/searchByCategory'

let SCREENS = [
].map((Page, index) => Page)

class CommodityScreen extends React.Component {
  static propTypes = {
    navigator: PropTypes.object,
    commodity: PropTypes.object
  };
  constructor (props) {
    super(props)
    BackPress.back(false, props)
    var commodity = props.commodity
    SCREENS.splice(0, 3)
    SCREENS.push(<Image style={styles.imgviewPager} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.imgPath1)}}/>)
    SCREENS.push(<Image style={styles.imgviewPager} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.imgPath2)}}/>)
    SCREENS.push(<Image style={styles.imgviewPager} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.imgPath3)}}/>)

    let dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    })
    this.state = {
      dataSource: dataSource.cloneWithPages(SCREENS),
      dataSource1: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.fetchData()
    }, 500)
  }
  fetchData () {
    fetch (REQUEST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: this.props.commodity.category
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource1: this.state.dataSource1.cloneWithRows(responseData),
        loaded: true
      })
    })
    .done()
  }

  renderCommidity (commodity) {
    return (
      <TouchableOpacity onPress={this.toCommodityScreen.bind(this, commodity)}>
        <Image style={styles.imgList} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.imgPath1)}}/>
      </TouchableOpacity>
    )
  }

  toCommodityScreen (commodity) {
    let navigator = this.props.navigator
    navigator.push({id: 'CommodityScreen', sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump, passProp: {commodity}})
  }

  returnback () {
    var navigator = this.props.navigator
    navigator.pop()
  }

  renderLoadingView () {
    return (
      <View style={styles.txtContainer}>
        <Text>
          正在加载内容。。。
        </Text>
      </View>
    )
  }
  alert () {
    ToastAndroid.show('200', ToastAndroid.SHORT)
  }
  render () {
    var commodity = this.props.commodity
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }
    return (
      <View style={{flex: 1}}>
        <View style={styles.viewTop}>
          <TouchableOpacity onPress={() => { this.returnback() }}>
            <View style={styles.viewTopLeft}>
              <Icon name='angle-left' size={30}/>
            </View>
          </TouchableOpacity>
          <View style={styles.viewTopRight}>
            <Text style={styles.txtTitle}>商品</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container} stickyHeaderIndices = {[3]}  onScroll= {null}>
          <View style={styles.viewViewPager}>
            <ViewPager
              dataSource={this.state.dataSource}
              renderPage={this._renderPage}
              isLoop={true}
              autoPlay={true} />
          </View>
          <View style={styles.viewTxtTitle}>
            <Text style={styles.txtCommodityTitle}>{commodity.title}</Text>
          </View>
          <View style={styles.viewEvaluationContent}>
            <Icon name='heart-o' size={20}/>
            <View style={styles.viewWrite}>
              <Icon name='pencil-square-o' size={20} />
            </View>
            <Icon name='share-square-o' size={20}/>
          </View>
          <TouchableOpacity onPress={this.gotoBuy.bind(this, commodity)}>
            <View style={styles.btnBuy}>
              <Text style={styles.txtLogin}>¥ {commodity.price} 去购买</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewLove}>
            <View style={styles.viewLoveTop}>
              <Text style={styles.txtLove}>{commodity.love}人喜爱</Text>
              <View style={styles.viewLoveTopRight}>
                <Icon name='angle-right' size={20} style={styles.iconLove}/>
              </View>
            </View>
            <View style={styles.viewLoveBottom}>
              <Image style={styles.imgHead} source={require('../assets/recommend1.png')}/>
              <Image style={styles.imgHead} source={require('../assets/recommend1.png')}/>
            </View>
          </View>
          <View style={styles.viewComment}>
            <View style={styles.viewCommentLeft}>
              <Image style={styles.imgComment} source={{uri: ('http://192.168.6.5:8888/getImage?imgName=' + commodity.commentImg[0])}}/>
            </View>
            <View style={styles.viewCommentRight}>
              <View style={styles.viewCommentRightTop}>
                <Text style={styles.txtName}>{commodity.commentAuthor[0]}</Text>
                <View style={styles.viewIconStar}>
                  <Icon name='star' style={styles.iconStar} size={20}/>
                </View>
              </View>
              <View style={styles.viewCommentRightCenter}>
                <Text>
                  {commodity.comment[0]}
                </Text>
              </View>
              <View style={styles.viewCommentRightBottom}>
                <View style={styles.viewIconThumbs}>
                  <Icon name='thumbs-o-up' size={20} />
                </View>
                <View style={styles.viewIconComment}>
                  <Icon name='comment-o' size={20} />
                </View>
                <View style={styles.viewIconTime}>
                  <Icon name='clock-o' size={15}/>
                  <Text>{commodity.date}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.viewRecommend}>
            <View style={styles.viewRecommendTitle}>
              <View style={styles.viewRecommendTitleLeft}>
                <Text> 来自［{commodity.category}］</Text>
              </View>
              <View style={styles.viewRecommendTitleRight}>
                <Icon name='angle-right' size={20} />
              </View>
            </View>
            <View style={styles.viewRecommendContent}>
              <ListView
                initialListSize={20}
                dataSource={this.state.dataSource1}
                renderRow={this.renderCommidity.bind(this)}
                contentContainerStyle={styles.listView}/>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  _renderPage (
    data: Object,
    pageID: number | string) {
    return (
      <View style={{flex: 1}}>
        {data}
      </View>
    )
  }
  /*
    购买
  */
  gotoBuy (commodity) {
    var navigator = this.props.navigator
    navigator.push({id: 'BuyWebView', sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump, passProp: {commodity}})
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  imgviewPager: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch'
  },
  viewTop: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5'
  },
  viewTopLeft: {
    height: 49,
    width: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6'
  },
  viewTopRight: {
    height: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  txtTitle: {
    fontSize: 15,
    marginLeft: 10
  },
  viewViewPager: {
    height: 350,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  viewTxtTitle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtCommodityTitle: {
    fontSize: 16
  },
  viewEvaluationContent: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  viewWrite: {
    marginLeft: 50,
    marginRight: 50
  },
  btnBuy: {
    height: 40,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#78A9F3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtLogin: {
    color: '#ffffff'
  },
  viewLove: {
    height: 129,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6'
  },
  viewLoveTop: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  txtLove: {
    flex: 1,
    marginLeft: 10
  },
  viewLoveBottom: {
    height: 80,
    flexDirection: 'row'
  },
  viewLoveTopRight: {
    width: 20
  },
  imgHead: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 10,
    borderColor: '#E6E6E6'
  },
  viewComment: {
    height: 160,
    margin: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E6E6E6'
  },
  viewCommentLeft: {
    height: 160,
    width: 60,
    alignItems: 'center'
  },
  viewCommentRight: {
    flex: 1,
    flexDirection: 'column'
  },
  imgComment: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  viewCommentRightTop: {
    flex: 2,
    flexDirection: 'row'
  },
  viewCommentRightCenter: {
    flex: 4
  },
  viewCommentRightBottom: {
    flex: 2,
    marginBottom: 10,
    flexDirection: 'row'
  },
  iconStar: {
    color: '#E79522'
  },
  viewIconStar: {
    flex: 1,
    alignItems: 'flex-end'
  },
  txtName: {
    color: '#5482C4'
  },
  viewIconThumbs: {
    width: 50,
    borderRightWidth: 1,
    justifyContent: 'center',
    borderColor: '#E6E6E6'
  },
  viewIconComment: {
    flex: 1,
    marginLeft: 30,
    justifyContent: 'center'
  },
  viewIconTime: {
    width: 110,
    alignItems: 'center',
    flexDirection: 'row'
  },
  viewRecommend: {
    flex: 1,
    backgroundColor: 'gray'
  },
  viewRecommendTitle: {
    height: 50,
    flexDirection: 'row'
  },
  viewRecommendContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewRecommendTitleLeft: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  viewRecommendTitleRight: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  },
  imgList: {
    height: 110,
    width: 110,
    resizeMode: 'cover',
    margin: 5
  },
  listView: {
    width: 368,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  }
})

module.exports = CommodityScreen
