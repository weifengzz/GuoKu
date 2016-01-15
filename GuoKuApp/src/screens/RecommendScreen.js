'use strict';

var React = require('react-native');
import Icon from 'react-native-vector-icons/FontAwesome'
import ViewPager from 'react-native-viewpager'
import ReacoomendViewPager from './ReacoomendViewPager'

let SCREENS = [
 ReacoomendViewPager,
 ReacoomendViewPager,
 ReacoomendViewPager,
 ReacoomendViewPager
].map((Page, index) => <Page />)

let {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;


class RecommendScreen extends React.Component{
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
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableHighlight>
          <View style={styles.viewSearch}>
            <View style={styles.viewIcon}>
              <Icon name='search' size={20}/>
            </View>
            <View style={styles.viewText}>
              <Text >搜索</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.viewViewPager}>
          <ViewPager
            dataSource={this.state.dataSource}
            renderPage={this._renderPage}
            isLoop={true}
            autoPlay={true} />
        </View>
        <View style={styles.viewRecommendTop}/>
        <Text style={styles.txtRecommend}>推荐品类</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.svRecommend}>
            <Image style={styles.imgRecommend} source={require('../assets/recommend1.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend1.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/logo.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend1.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/logo.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend2.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend2.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/logo.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/logo.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend1.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend2.png')}></Image>
            <Image style={styles.imgRecommend} source={require('../assets/recommend1.png')}></Image>
          </View>
        </ScrollView>
        <View style={styles.viewRecommendTop}/>
        <Text style={styles.txtRecommend}>热门图文</Text>
        <View style={styles.graphicRecommend}>
          <View style={styles.viewGraphicLeft}>
            <Text style={styles.textGraphic}>总结2015年度值得你用钱包去深爱的100家好店</Text>
          </View>
          <View style={styles.viewGraphicRight}>
            <Image style={styles.imgGraphic} source={require('../assets/graphthj3.png')}/>
          </View>
        </View>
          <View style={styles.graphicRecommend}>
          <View style={styles.viewGraphicLeft}>
            <Text style={styles.textGraphic}>Noritake用插画为写真Monocle年刊御用</Text>
          </View>
          <View style={styles.viewGraphicRight}>
            <Image style={styles.imgGraphic} source={require('../assets/graphthj1.png')}/>
          </View>
        </View>
          <View style={styles.graphicRecommend}>
          <View style={styles.viewGraphicLeft}>
            <Text style={styles.textGraphic}>感谢这八本2016日离，让我们把日子过成段</Text>
          </View>
          <View style={styles.viewGraphicRight}>
            <Image style={styles.imgGraphic} source={require('../assets/graphthj2.png')}/>
          </View>
        </View>
      </ScrollView>
    )
  }

   _renderPage (
    data: Object,
    pageID: number | string) {
    return (
      <View style={{flex:1}}>
        {data}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  viewSearch: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#F0F0F0',
  },
  viewIcon: {
    flex:1,
    height: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    flex:5,
    height: 50,
    justifyContent: 'center'
  },
  viewViewPager: {
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  viewRecommendTop: {
    height: 10,
    backgroundColor: '#F0F0F0'
  },
  txtRecommend: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 10
  },
  svRecommend:{
    height: 120,
    flexDirection: 'row'
  },
  imgRecommend: {
    height: 100,
    width: 100,
    margin: 10,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  graphicRecommend: {
    height: 120,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
  },
  viewGraphicLeft: {
    margin: 10,
    flex: 2,
  },
  viewGraphicRight: {
    margin: 10,
    flex: 1,
  },
  textGraphic: {
    fontSize: 17,
  },
  imgGraphic: {
    resizeMode: 'stretch',
    width: null,
    height: 100
  }
});

module.exports = RecommendScreen
