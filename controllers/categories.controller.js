const Category = require("../models/Category.model")

module.exports.categoriesController = {
    getCategories: (req, res) => {
        Category.find({})
        .then((data) => res.json(data))
        .catch((error) => {
            res.json('Произошла какая-то ошибочка')
        })
    },
    addCategory: (req, res) => {
        console.log(req.body)
        Category.create({
            name: req.body.name,
        }).then((data) => {
            res.json('Категория была добавлена')
        }).catch((error) => {res.json('Что-то произошло не так')})
    },
    deleteCategories: (req, res) => {
        Category.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json('Категория была удалена')
        })
        .catch((error) => {
            res.json('Что-то не так видимо в контроллерах')
        })
    }
}