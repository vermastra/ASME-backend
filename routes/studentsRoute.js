const express = require('express');
const { isAuthenticatedUser } = require('../controllers/admin');
const { addStudent, updateStudent, deleteStudent, getAllStudents, getStudentDetails } = require('../controllers/studentController');
const router = express.Router();


router.route("/student/new").post( addStudent)
router.route("/student/:id").get(getStudentDetails).put( updateStudent).delete( deleteStudent)
router.route("/students/:event").get(getAllStudents)

module.exports = router;