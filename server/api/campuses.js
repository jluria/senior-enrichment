const router = require('express').Router();
const { Campus } = require('../db/models');

// Route for getting all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

// Route for getting a campus by its id
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
})

module.exports = router;
