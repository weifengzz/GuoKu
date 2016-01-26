'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Navigator
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

var WEBVIEW_REF = 'webview'

class GraphicWebView extends Component {
  render () {
    let commodity = this.props.commodity
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <View style={styles.viewTitleLeft}>
              <Icon name='angle-left' size={20}/>
            </View>
          </TouchableOpacity>
          <View style={styles.viewTitleCenter}>
            <Text>
            {
              commodity.title.length > 10 ? commodity.title.substring(0, 10) + '...' : commodity.title
            }
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.viewTitleRight}>
              <Icon name='ellipsis-h' size={20}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.webviewComtainer}>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            url={commodity.url}
            renderLoading = {() => {
              return <View><Text>正在加载...</Text></View>
            }}
            javaScriptEnabledAndroid={true}
            startInLoadingState={true} />
        </View>
      </View>
    )
  }

  goBack () {
    navigator = this.props.navigator
    navigator.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  viewTitle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  viewTitleLeft: {
    height: 49,
    width: 49,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E6E6E6'
  },
  viewTitleCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewTitleRight: {
    height: 49,
    width: 49,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E6E6E6'
  },
  webviewComtainer: {
    flex: 1
  },
  webView: {
    flex: 1
  }
})

module.exports = GraphicWebView
