const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const length = kidneys.length;

    res.send("You have " + length + " kidneys.");
})

// global catch or error handling middlewares
app.use(function(err, req, res, next){
    res.json({
        msg: "Something went wrong."
    })
})

app.listen(3000);