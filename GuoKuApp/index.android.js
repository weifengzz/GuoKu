'use strict'

var React = require('react-native')
var RecommendScreen = require('./src/screens/RecommendScreen')

var GuoKuRunner = require('./src/GuoKuRunner')
var LoginScreen = require('./src/screens/UserLRScreen/LoginScreen')
var RegisterScreen = require('./src/screens/UserLRScreen/RegisterScreen')
var SetUpScreen = require('./src/screens/SettingScreen')
var SearchScreen = require('./src/screens/SearchScreen')
var MainRoute = require('./src/screens/MainRoute')

React.AppRegistry.registerComponent('GuoKuApp', () => GuoKuRunner)
