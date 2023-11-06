const express = require('express');
const {
    createCourse,
    getAllCourses,
    getCourse,
    deleteCourse,
    updateCourse
} = require("../controllers/courseController");
const router = express.Router();

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourse);
router.delete('/:id', deleteCourse);
router.patch('/:id', updateCourse);

module.exports = router;