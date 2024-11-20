const express = require("express");
const port = 3000;
const app = express();

function calculateSum(n){
    let sum = 0;
    for(let i = 0; i <= n ; i++){
        sum += i;
    }
    return sum;
}

app.get("/", (req, res) => {
    console.log("Inside get method");
    const n = req.query.n;
    const sum = calculateSum(n);
    console.log(`Sum from 0 till ${n} is ${sum}`);
    res.send({
        range: n,
        output: sum.toString(),
    });
})

app.listen(port);