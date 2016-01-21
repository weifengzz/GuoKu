'use strict'

var React = require('react-native')
import Icon from 'react-native-vector-icons/FontAwesome'
import ViewPager from 'react-native-viewpager'
import CommodityViewPager from './CommodityViewPager'

let {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ListView
} = React

const REQUEST_URL = 'http://192.168.6.5:8888/getGraphic'

let SCREENS = [
 CommodityViewPager,
 CommodityViewPager,
 CommodityViewPager,
 CommodityViewPager
].map((Page, index) => <Page />)

class CommodityScreen extends React.Component {
  constructor (props) {
    super(props)
    let dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    })
    this.state = {
      dataSource: dataSource.cloneWithPages(SCREENS),
      dataSource1: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource1: this.state.dataSource1.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  renderGraphic(graphics) {
    return (
        <View style={styles.item}>
          <Image style={styles.imgList} source={{uri: ('http://192.168.6.5:8888/getImage?imgName='+graphics.imgPath)}}/>
        </View>
    );
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.viewTop}>
          <View style={styles.viewTopLeft}>
            <Icon name='angle-left' size={30}/>
          </View>
          <View style={styles.viewTopRight}>
            <Text style={styles.txtTitle}>商品</Text>
          </View>
        </View>
        <View style={styles.viewViewPager}>
          <ViewPager
            dataSource={this.state.dataSource}
            renderPage={this._renderPage}
            isLoop={true}
            autoPlay={true} />
        </View>
        <View style={styles.viewTxtTitle}>
          <Text style={styles.txtCommodityTitle}>Godinger-无铅水晶玻璃花杯</Text>
        </View>
        <View style={styles.viewEvaluationContent}>
          <Icon name='heart-o' size={20}/>
          <View style={styles.viewWrite}>
            <Icon name='pencil-square-o' size={20} />
          </View>
          <Icon name='share-square-o' size={20}/>
        </View>
        <View style={styles.btnBuy}>
          <Text style={styles.txtLogin}>¥ 220.00 去购买</Text>
        </View>
        <View style={styles.viewLove}>
          <View style={styles.viewLoveTop}>
            <Text style={styles.txtLove}>9人喜爱</Text>
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
            <Image style={styles.imgComment} source={require('../assets/recommend2.png')}/>
          </View>
          <View style={styles.viewCommentRight}>
            <View style={styles.viewCommentRightTop}>
              <Text style={styles.txtName}>呈祥</Text>
              <View style={styles.viewIconStar}>
                <Icon name='star' style={styles.iconStar} size={20}/>
              </View>
            </View>
            <View style={styles.viewCommentRightCenter}>
              <Text>
                撒娇克服恐惧刷卡机翻看手机啊打开附近，阿萨德和飞机撒谎地方就是大法好。
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
                <Text>2015-12-7</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewRecommend}>
          <View style={styles.viewRecommendTitle}>
            <View style={styles.viewRecommendTitleLeft}>
              <Text>来自［酒杯］</Text>
            </View>
            <View style={styles.viewRecommendTitleRight}>
              <Icon name='angle-right' size={20} />
            </View>
          </View>
          <View style={styles.viewRecommendContent}>
            <ListView
              initialListSize={20}
              dataSource={this.state.dataSource1}
              renderRow={this.renderGraphic}
              contentContainerStyle={styles.listView}/>
          </View>
        </View>
      </ScrollView>
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
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  viewTop: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  viewTopLeft: {
    height: 49,
    width: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'green'
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
    backgroundColor: 'blue',
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
    borderBottomWidth: 1
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
    margin: 10
  },
  viewComment: {
    height: 160,
    margin: 10,
    flexDirection: 'row',
    borderBottomWidth: 1
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
    color: 'blue'
  },
  viewIconThumbs: {
    width: 50,
    borderRightWidth: 1,
    justifyContent: 'center'
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
    justifyContent: 'center'
  },
  viewRecommendTitleRight: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
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
