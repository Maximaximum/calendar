const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        start: { type: Number, required: true },
        duration: { type: Number, required: true },
        title: { type: String, required: true },
        user: { type: String, require: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('events', Event)