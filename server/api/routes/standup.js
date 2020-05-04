const mongoose = require('mongoose')
const StandUp = require('../../models/standup')

module.exports = function (router) {
    router.get('/standup', function (req, res) {
        StandUp.find()
            .sort({ 'createdOn': 1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes : ',
                error: err
            }));
    })



    router.get('/standup/:teamMemberId', function (req, res) {
        const query = {
            _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
        }

        StandUp.find(query)
            .sort({ 'createdOn': 1 })
            .exec() 
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes for teamMember Id',
                error: err
            }));
    })

    router.post('/standup', function (req, res) {
        let note = new StandUp(req.body)
        note.save(function (err, note) {
            if (err)
                return res.status(400).json(err);
            return res.status(200).json(note)
        })
    })
}