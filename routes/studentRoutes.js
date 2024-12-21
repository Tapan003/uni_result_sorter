const express = require('express');
const { addStudent, getSortedStudents, searchStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/add', addStudent);
router.get('/sorted', getSortedStudents);

router.get('/search/:type/:value', searchStudent);


module.exports = router;
