const router = require('express').Router();
const { Student } = require('../db/models');

// Route for getting all students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})

// Route for getting a student by its id
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId, { include: [{ all: true }] })
    .then(student => res.json(student))
    .catch(next);
})

module.exports = router;
