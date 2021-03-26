const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://viacheslav:password1234@cluster0.axaij.mongodb.net/notes?retryWrites=true&w=majority', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(e => {
        console.error('Connection error...', e.message)
    })

const db = mongoose.connection

module.exports = db
