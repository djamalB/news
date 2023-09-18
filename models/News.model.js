const mongoose = require("mongoose");
const Category = require("./Category.model");

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

const News = mongoose.model('News', newsSchema);
module.exports = News