const router = require('express').Router();
const { Student } = require('../db/models');

// Route for getting all students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})

module.exports = router;
