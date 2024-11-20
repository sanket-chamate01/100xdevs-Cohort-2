const express = require("express");
const app = express();

let numberOfRequests = 0;

function calculateRequest(req, res, next){ // the 3rd argument as next makes it a middleware
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(calculateRequest);              // run calculateRequest middleware for every call of all below router 

app.get("/", (req, res, next) => {
    console.log("from req 1");
    next();                             // without next() the app will stuck here
}, (req, res, next) => {
    console.log("from req 2");
    next();
}, (req, res) => {
    console.log("from req 3");
    res.send();
})

app.listen(3000);