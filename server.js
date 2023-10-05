const express = require('express')
const { response } = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.send({message: 'Наш сервис'})
})

app.get('/main', (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`)
})

app.get('/articles', (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`)
})

app.get('/articles/article/:id', (request, response) => {

    response.sendFile(`${__dirname}/public/index.html`)
})

app.post('/articles/article/:id', (request, response) => {
    
    response.send({message: 'Наш сервис'})
})

app.put('/articles/article/:id', (request, response) => {
    response.send({message: 'Наш сервис'})
})

app.delete('/articles/article/:id', (request, response) => {
    if(id) {
        // Удаляем
    } else {
        response.send({message: 'Нет ID'})
    }
    response.send({message: 'Наш сервис'})
})

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Application start on port: ${PORT}`)
})