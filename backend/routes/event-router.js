const express = require('express')

const EventCtrl = require('../controllers/event-ctrl')

const router = express.Router()

router.post('/event', EventCtrl.createEvent)
router.delete('/event/:id', EventCtrl.deleteEvent)
router.post('/events', EventCtrl.getEventsByUser)
router.get('/events/download/:user', EventCtrl.downloadEvents)

module.exports = router