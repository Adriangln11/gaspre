const express = require('express')
const morgan = require('morgan')
const router = require('./routes/router')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.disable('x-powered-by')

app.use('/prices', router)

module.exports = app
