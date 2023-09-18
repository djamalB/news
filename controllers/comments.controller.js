const Comment = require('../models/Comment.model')

module.exports.commentsController = {
    addComment: (req, res) => {
        console.log(req.body)
        Comment.create({
            name: req.body.name,
            text: req.body.text,
            newsId: req.body.newsId
        })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json(error  )
        })
    },
    deleteComment: (req, res) => {
        console.log(req.body)
        Comment.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json('Комментарий был удален')
        })
        .catch((error) => {
            res.json('Не удалось удалить комментарий')
        })
    },
    getAllCommentsOfNew: (req, res) => {
        console.log(req.body)
        Comment.find({newsId: req.params.id})
        .populate('newsId')
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json('Не удалось отобразить все комментарии')
        })
    }
}