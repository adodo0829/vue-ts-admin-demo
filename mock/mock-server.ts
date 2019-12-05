import express from 'express'
import Mock from 'mockjs'
import bodyParser from 'body-parser'
let app = express()
app.use(bodyParser.json())

let filesAppAPI = require('./filesApp')

// 设置跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  // 此处根据前端请求携带的请求头进行配置
  res.header('Access-Control-Allow-Headers', 'Content-Type,Access-Token,X-Access-Token')
  next()
})

// ******************* 应用信息 *************************
app.get('/ios/info', (req, res) => {
  res.json(Mock.mock(filesAppAPI.getIosInfoList(req)))
  console.log('iOS 应用信息列表')
})

app.listen('3000', () => {
  console.log('mock服务器启动ing中... port: 3000')
})
