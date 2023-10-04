const express = require('express')
const { response } = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.send({message: 'Наш сервис'})
})

app.get('/main', (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`)
})

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Application start on port: ${PORT}`)
})