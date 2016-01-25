'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

var WEBVIEW_REF = 'webview'

class GraphicWebView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <View style={styles.viewTitleLeft}>
            <Text>back</Text>
          </View>
          <View style={styles.viewTitleCenter}>
            <Text>title</Text>
          </View>
          <View style={styles.viewTitleRight}>
            <Text>go</Text>
          </View>
        </View>
        <View style={styles.webviewComtainer}>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            url={'http://www.baidu.com/'}
            javaScriptEnabledAndroid={true}
            startInLoadingState={true} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewTitle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  viewTitleLeft: {
    height: 49,
    width: 49,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center'
  },
  webviewComtainer: {
    flex: 1
  },
  webView: {
    flex: 1
  }
})

module.exports = GraphicWebView
