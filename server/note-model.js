const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
    {
        name: { type: String, required: true },
        note: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('notes', Note)
