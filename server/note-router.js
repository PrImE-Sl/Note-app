const express = require('express')

const NoteCtrl = require('./note-ctrl')

const router = express.Router()

router.post('/notes', NoteCtrl.createNote)
router.put('/notes/:id', NoteCtrl.updateNote)
router.delete('/notes/:id', NoteCtrl.deleteNote)
router.get('/notes/:id', NoteCtrl.getNoteById)
router.get('/notes', NoteCtrl.getNotes)

module.exports = router
