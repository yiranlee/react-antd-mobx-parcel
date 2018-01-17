const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')

let bundler = new Bundler('./index.html')
let app = express()

app.use(
  '/api',
  proxy({
    changeOrigin: true,
    target: 'http://jsonplaceholder.typicode.com/',
    pathRewrite: { '^/api': '' },
  })
)

app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))
