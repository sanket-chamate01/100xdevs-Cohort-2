const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [{
    username: "abc",
    password: "abc",
    name: "abc"
}, {
    username: "xyz",
    password: "xyz",
    name: "xyz"
}, {
    username: "def",
    password: "def",
    name: "def"
}]

function userExists(username, password){
    for(let i = 0; i < ALL_USERS.length; i++){
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