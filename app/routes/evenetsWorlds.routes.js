module.exports = (app) => {
    const eventsWorld = require('../controllers/eventsWorld.controller')

    // Создание события
    app.post('/event', eventsWorld.create)

    // Получить все собфтия
    app.get('/events', eventsWorld.findAll)

    // Получить определенные события
    app.get('/event/:id', eventsWorld.findOne)

    // Обновить информацию о событии
    app.put('/event/:id', eventsWorld.update)

    // Удалить событие
    app.delete('/event/:id', eventsWorld.delete)
}