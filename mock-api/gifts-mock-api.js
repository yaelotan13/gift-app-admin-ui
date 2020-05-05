const express = require('express')
var cors = require('cors')
const routes = require('./request/routes')
const app = express()

app.use(cors(), express.json())

routes.register(app)

module.exports = {
  port: 3533,
  open: false,
  logLevel: 'debug',
  server: {
    middleware: {
      1: app
    }
  }
};