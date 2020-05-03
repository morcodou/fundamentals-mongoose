const TeamMember = require('../../models/teamMember')

module.exports = function (router) {
    router.get('/team', function (req, res) {

    })

    router.post('/team', function (req, res) {
        let team = new TeamMember(req.body)
        note.save(function (err, team) {
            if (err)
                return res.status(400).json(err);
            return res.status( 200).json(team)
        })
    })
}