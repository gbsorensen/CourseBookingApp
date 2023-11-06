const Course = require("../models/courseModel");

// POST new course
const createCourse = async (req, res) => {
    const { title, description, instructor, duration, availableSlots } = req.body;

    try {
        const course = await Course.create({
            title,
            description,
            instructor,
            duration,
            availableSlots,
        });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET ALL courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()

        res.status(200).json({
            count: courses.length,
            courses,
          });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// GET a course
const getCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById({_id: id})

        if(!course){
            return res.status(404).json({error: 'No course found'})
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// const getAllCourses = async (req, res)=>{
//     const courses = await Workout.find()

//     res.status(200).json(courses)
// }

module.exports = {
    createCourse,
    getAllCourses,
    getCourse,
}