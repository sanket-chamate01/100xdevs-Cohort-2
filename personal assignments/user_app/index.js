const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://sanket:sanket@cohort.bq8x5.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

function userExists(username, password){
    for(let i = 0; i < User.length; i++){
        if(ALL_USERS[i].username === username){
            if(ALL_USERS[i].password === password){
                return true;
            }
        }
    }
    return false;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        res.status(403).json({
            msg: "User does not exist in our db."
        });
    }

    var token = jwt.sign({username : username}, "123456");
    return res.json({
        token
    });
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ username: username });
    if(existingUser){
        return res.status(400).send(
            "username already exists."
        );
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    })
    
    user.save();

    return res.json({
        msg: "User with username: " + username + " is created."
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    try{
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        const list = [];
        for(let i = 0; i < ALL_USERS.length; i++){
            if(!(ALL_USERS[i].username === username)){
                list.push(ALL_USERS[i].username);
            }
        }
        res.json({
            users: list
        })
    }catch(err){
        return res.status(403).json({
            msg: "Invalid token."
        })
    }
});

app.listen(3000);