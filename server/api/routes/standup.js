const StandUp = require('../../models/standup')

module.exports = function (router) {
    router.get('/standup', function (req, res) {

    })

    router.post('/standup', function (req, res) {
        let note = new StandUp(req.body)
        note.save(function (err, note) {
            if (err)
                return res.status(400).json(err);
            return res.status( 200).json(note)
        })
    })
}