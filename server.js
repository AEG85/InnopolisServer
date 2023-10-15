const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
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
require('./app/routes/users.routes')(app);

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Application start on port: ${PORT}`)
})