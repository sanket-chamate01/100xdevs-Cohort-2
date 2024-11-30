const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    }).then(() => {
        res.json({
            message: 'User created successfully'
        })
    }).catch(() => {
        res.json({
            message: 'User not created'
        })
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: new mongoose.Types.ObjectId(courseId)
        }
    }).then(() => {
        res.json({
            message: 'Course purchased successfully'
        })
    }).catch((e) => {
        console.log(e);
        res.json({
            message: 'Purchase Unsuccessful'
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourse
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router