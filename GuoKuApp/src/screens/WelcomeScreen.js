'use strict'

import React from 'react-native'
import MainScreen from './MainScreen'

var {
  Image,
  StyleSheet,
  View,
  Text,
  PropTypes
} = React

class WelcomePage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>果库</Text>
        <Image source={{uri: 'http://192.168.6.5:8888/getImage?imgName=welcome.png'}} style={styles.img} />
      </View>
    )
  }
  componentWillMount () {
    var navigator = this.props.navigator
    setTimeout(() => {
      navigator.replace({
        id: 'MainScreen'
      })
    }, 5000)
  }

  fetchData(un,pw) {
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
          result: responseData,
        })
    })
    .done()
  }
  
  responseData(response){
    return response.result.data
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
})

module.exports = WelcomePage

