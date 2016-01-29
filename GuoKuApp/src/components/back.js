'use strict'
import React from 'react-native'

var {
  BackAndroid
} = React

function back (IS_MAIN, props, rt) {
	BackAndroid.addEventListener('hardwareBackPress', function () {
    if (!IS_MAIN && !rt) {
      var navigator = props.navigator
      navigator.pop()
      return true
    }
    return false
  })
}

exports.back = back
