const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.get("/interest", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = parseInt(req.query.c);
    const interest = a * (b/100) * c;
    const total = interest + a;
    res.send(`Interest = ${interest}<br>Total Amount to be paid = ${total}`);
})

app.listen(3000, () => {
    console.log("Listning on port 3000");
    
})