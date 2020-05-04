const TeamMember = require('../../models/teamMember')

module.exports = function (router) {
    router.get('/team', function (req, res) {
        TeamMember.find()
            .sort({ 'name': 1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding team members',
                error: err
            }));
    })

    router.post('/team', function (req, res) {
        let team = new TeamMember(req.body)
        note.save(function (err, team) {
            if (err)
                return res.status(400).json(err);
            return res.status(200).json(team)
        })
    })
}