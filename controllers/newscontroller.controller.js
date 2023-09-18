const News = require("../models/News.model")

module.exports.newsController = {
    addNews: (req, res) => {
        console.log(req.body)
        News.create({
            title: req.body.title,
            text: req.body.text,
            categoryId: req.body.categoryId
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json(error  )
        })
    },
    deleteNews: (req, res) => {
        console.log(req.body)
        News.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json('Новость была удалена')
        })
        .catch((error) => {
            res.json('Новость удалить не удалось')
        })
    },
    changeNews: (req, res) => { 
        console.log(req.body)
        News.findByIdAndUpdate(req.params.id, {title: req.body.title, text: req.body.text})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json('Что-то пошло не так с изменением новости')
        })
    },
    getNewsId: (req, res) => {
        console.log(req.body)
        News.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json('Показать новость не получилось. Что-то не так')
        })
    },
    getAllNews: (req, res) => {
        console.log(req.body)
        News.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json('Ошибочка, не удается показать все новости')
        })
    },
    getAllNewsByCategory: (req, res) => {
        console.log(req.body) 
        News.find({categoryId: req.params.id})
        .populate('categoryId')
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json('Не удалось показать новости из определенной категории')
        })
    }
}