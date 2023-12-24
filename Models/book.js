const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookDetails = new Schema({
    BookName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    AuthorName: {
        type: String,
        required: true
    },
    Review: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', bookDetails)