const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Успешное подключение к Базе Данных')
}).catch((error) => {
    console.log('Нет соединения с базой данных. Все плохо...', error)
    process.exit()
})

require('./app/routes/evenetsWorlds.routes')(app);

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Application start on port: ${PORT}`)
})