const Users = require('../models/users.model')

// Создание события
exports.create = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.send({
        login: 'Login-заглушка',
        email: 'Email-заглушка'
    })
    // Рабочий вариант с исользованием MongoDB
    // Проверяем логин
    // if (!req.body.login) {
    //     return res.status(400).send({
    //         message: 'Логин не может быть пустым',
    //         success: false,
    //     })
    // } else {
    //     const userByLoginInMongo = await Users.findOne({ login: req.body.login })
    //     if(userByLoginInMongo) {
    //         return res.status(400).send({
    //             message: `Пользоватлеь с логином ${userByLoginInMongo.login} уже существует`,
    //             success: false,
    //         })
    //     }
    // }
    // // Проверяем email
    // if (!req.body.email) {
    //     return res.status(400).send({
    //         message: 'Email не может быть пустым',
    //         success: false,
    //     })
    // } else {
    //     const userByEmailinMongo = await Users.findOne({ email: req.body.email })
    //     if(userByEmailinMongo) {
    //         return res.status(400).send({
    //             message: `Пользоватлеь с email ${userByEmailinMongo.email} уже существует`,
    //             success: false,
    //         })
    //     }
    // }

    // if (!req.body.password) {
    //     return res.status(400).send({
    //         message: 'Пароль не может быть пустым',
    //         success: false,
    //     })
    // }

    // const newUser = new Users({
    //     login: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // })

    // await newUser.save()
    //     .then(data => {
    //         res.send(data)
    //     }).catch((error) => {
    //         res.status(500).send({
    //             message: `Данные не записались ${error.message}`,
    //             success: false
    //         })
    //     })
    
}

// Получение пользоватлея по login
exports.findOne = (req, res) => {
    res.send({
        login: 'Login-заглушка',
        email: 'Email-заглушка'
    })
    // Рабочий вариант с исользованием MongoDB
    // if (!req.query.login || !req.query.password) {
    //     return res.status(400).send({
    //         message: 'Логин или пароль не может быть пустым',
    //         success: false,
    //     })
    // } else {
    //     Users.findOne({login: req.query.login})
    //     .then(user => {
    //         if (!user) {
    //             return res.status(404).send({
    //                 message: "Не найден пользователь с логином " + req.query.login
    //             });
    //         }
    //         res.send(user);
    //     }).catch(err => {
    //         if (err.kind === 'ObjectId') {
    //             return res.status(404).send({
    //                 message: "Не найден пользователь с логином " + req.query.login
    //             });
    //         }
    //         return res.status(500).send({
    //             message: "Ошибка получения пользователя с логином " + req.query.login
    //         });
    //     });    
    // }
}