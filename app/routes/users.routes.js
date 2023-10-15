module.exports = (app) => {
    const users = require('../controllers/users.controller')

    // Регистрация пользователя
    app.post('/login', users.create)

    // Получить всех пользователей
    app.get('/user', users.findOne)
}