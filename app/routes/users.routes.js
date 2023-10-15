module.exports = (app) => {
    const users = require('../controllers/users.controller')

    // Регистрация пользователя
    app.post('/login', users.create)

    // Получить пользователя по его логину
    app.get('/user', users.findOne)
}