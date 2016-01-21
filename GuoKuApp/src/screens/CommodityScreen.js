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
  ScrollView

} = React

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
      dataSource: dataSource.cloneWithPages(SCREENS)
    }
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
    height: 200
  }
})

module.exports = CommodityScreen
