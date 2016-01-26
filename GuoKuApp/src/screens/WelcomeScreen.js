'use strict'

import React from 'react-native'
import MainRoute from './MainRoute'

var {
  Image,
  StyleSheet,
  View,
  Text
} = React

class WelcomePage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'http://192.168.6.5:8888/getImage?imgName=welcome.jpg'}} style={styles.img} />
      </View>
    )
  }
  componentWillMount () {
    var navigator = this.props.navigator
    setTimeout(() => {
      navigator.replace({
        id: 'MainRoute'
      })
    }, 1000)
  }

  fetchData(un, pw) {
    fetch(REQUEST_URL, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName: un,
      password: pw
    })
  })
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
          result: responseData
        })
    })
    .done()
  }
  responseData (response) {
    return response.result.data
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    resizeMode: 'cover'
  }
})

module.exports = WelcomePage

