const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    name: String,
    text: String,
    newsId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'News'
    },
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;