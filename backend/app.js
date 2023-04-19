const urlRoutes = require('./routes/url')

const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())


app.use('/api/url', urlRoutes)
module.exports = app;