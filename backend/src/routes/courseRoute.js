const express = require('express');
const {
    createCourse,
    getAllCourses,
    getCourse
} = require("../controllers/courseController");
const router = express.Router();

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourse);

module.exports = router;