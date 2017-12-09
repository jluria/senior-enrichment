const router = require('express').Router();
const { Campus } = require('../db/models');

// Route for getting all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

module.exports = router;
