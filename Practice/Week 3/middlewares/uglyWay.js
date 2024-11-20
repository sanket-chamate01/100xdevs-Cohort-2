const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.kidneyId, 10);

    if(username != "sanket" || password != "sanket"){
        res.status(400).json({
            msg: "Wrong credentials"
        })
        return;
    }

    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(400).json({
            msg: "Wrong kidneyId input"
        })
        return;
    }

    res.json({
        msg: "Your kidney is fine"
    })
})

app.listen(3000);