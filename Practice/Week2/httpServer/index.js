const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.json()); // to convert body content to json format...as express does not explicitly converts body to json format and it needs to know what type of data you're sending, so it knows how to parse it

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/post', (req, res) => {
    // console.log(req.headers);
    const msg = req.query.msg; // for /post?msg=123 prints 123
    // const msg = req.body.msg;
    console.log(msg);
    res.send({
        output: "I am learning."
    });
});

app.listen(port, () => {
    console.log("Example app listning on port " + port);
});

// app.listen(port);