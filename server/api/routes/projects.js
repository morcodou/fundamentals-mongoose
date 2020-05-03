const Project = require('../../models/project')


module.exports = function (router) {
    router.get('/projets', function (req, res) {

    })

    router.post('/projets', function (req, res) {
        let project = new Project(req.body)
        project.save(function (err, note) {
            if (err)
                return res.status(400).json(err);
            return res.status( 200).json(note)
        })
    })
}