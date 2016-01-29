import Storage from 'react-native-storage'

var storage = new Storage({
// 最大容量，默认值1000条数据循环存储
  size: 1000,
  // 数据过期时间，默认一整天（1000 * 3600 * 24秒）
  defaultExpires: 1000 * 3600 * 24,
  // 读写时在内存中缓存数据。默认启用。
  enableCache: true
})

var global = {storage: storage}

module.exports = global
