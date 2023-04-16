require('dotenv').config()
const urlRoutes = require('./routes/url')

const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/url', urlRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})