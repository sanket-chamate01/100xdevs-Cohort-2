const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken")
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

router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Incorrect credentials"
        })
    }
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
    const username = req.username;
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbmtldCIsImlhdCI6MTczMzA0MDkzMn0.T1eogNiJzsiiOLMRpYKhkLCjj6yBwP8UzhhSAKapM2Q

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
    // const token = req.headers.authorization;
    // const words = token.split(" ");
    // const jwtToken = words[1];
    // const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
    // const username = decodedValue.username;

    const username = req.username;

    const user = await User.findOne({
        username: username
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