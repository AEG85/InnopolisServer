const EventsWorld = require('../models/eventsWorld.model')

// Создание события
exports.create = (req, res) => {
    // Валидация данных
    if (!req.body.name) {
        return res.status(400).send({
            message: 'Наименования события не может быть пустым',
            success: false,
        })
    }

    if (!req.body.description) {
        return res.status(400).send({
            message: 'Описание события не может быть пустым',
            success: false,
        })
    }

    const eventWorld = new EventsWorld({
        name: req.body.name,
        description: req.body.description
    })

    eventWorld.save()
    .then(data=>{
        res.send(data)
    }).catch((error) => {
        res.status(500).send({
            message: `Данные не записались ${error.message}`,
            success: false
        })
    })
}

// Получение всех событий
exports.findAll = (req, res) => {
    EventsWorld.find()
    .then(eventWorlds => {
        res.send(eventWorlds);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "В ходе получения событий произошла ошибка."
        });
    });
};

// Получение определенного события
exports.findOne = (req, res) => {
    EventsWorld.findById(req.params.id)
    .then(eventWorld => {
        if(!eventWorld) {
            return res.status(404).send({
                message: "Не найдено событие с id " + req.params.id
            });            
        }
        res.send(eventWorld);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Не найдено событие с id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Ошибка получения события с id " + req.params.id
        });
    });
};

// Обновление определенного события
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.description) {
        return res.status(400).send({
            message: "Описание события не может быть пустым"
        });
    }

    // Find todo and update it with the request body
    EventsWorld.findByIdAndUpdate(req.params.id, {
        name: req.body.name || "Событие без названия",
        description: req.body.description
    }, {new: true})
    .then(eventWorld => {
        if(!eventWorld) {
            return res.status(404).send({
                message: "Не найдело событие с id " + req.params.id
            });
        }
        res.send(eventWorld);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Не найдело событие с id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Ошибка обновления события с id " + req.params.id
        });
    });
};

// Удаление определенного события
exports.delete = (req, res) => {
    EventsWorld.findByIdAndRemove(req.params.id)
    .then(eventWorld => {
        if(!eventWorld) {
            return res.status(404).send({
                message: "Не найдено событие с id " + req.params.id
            });
        }
        res.send({message: "Событие успешно удалено!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Не найдено событие с id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Не удалось удалить событие с id " + req.params.id
        });
    });
};