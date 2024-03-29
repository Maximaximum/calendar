const Event = require('../models/event-model')

createEvent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const event = new Event(body)

    if (!event) {
        return res.status(400).json({ success: false, error: err })
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Event created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}

deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        
        return res.status(200).json({ 
            success: true, 
            data: event,
            message: 'Event deleted!' 
        })

    }).catch(err => console.log(err))
}

getEventsByUser = async (req, res) => {
    await Event.find({ user: req.body.user }, (err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        events.sort((a, b) => {
          return (a.start === b.start) ? (b.duration - a.duration) : (a.start - b.start);
        })

        return res.status(200).json({ 
            success: true, 
            data: events
        })

    }).catch(err => console.log(err))
}

downloadEvents = async (req, res) => {
  await Event.find({ user: req.params.user }, (err, events) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    events.sort((a, b) => {
      return (a.start === b.start) ? (b.duration - a.duration) : (a.start - b.start);
    })

    const newEvents = [];

    events.forEach(event => {
      newEvents.push (
        { start: event.start, duration: event.duration, title: event.title }
      )
    });

    res.setHeader('Content-type', 'aplication/json')
    res.setHeader('Content-Disposition', `attachment; filename="${req.params.user}.json"`)
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposotion')

    return res.status(200).json(newEvents)

  }).catch(err => console.log(err))
}

module.exports = {
    createEvent,
    deleteEvent,
    getEventsByUser,
    downloadEvents,
}