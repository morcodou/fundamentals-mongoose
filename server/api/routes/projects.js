const Project = require('../../models/project')


module.exports = function (router) {


    router.get('/projects', function (req, res) {

        const query = {
            isActive: { $eq: true }
        }

        Project.find(query)
            .sort({ 'name': 1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding active projects',
                error: err
            }));
    })

    router.post('/projets', function (req, res) {
        let project = new Project(req.body)
        project.save(function (err, note) {
            if (err)
                return res.status(400).json(err);
            return res.status(200).json(note)
        })
    })
}