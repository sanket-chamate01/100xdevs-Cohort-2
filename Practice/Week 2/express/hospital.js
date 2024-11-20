const express = require("express");
const port = 3000;
const app = express();

// Status codes

// 200: everything went fine
// 404: doctor is not in the hospital
// 500: mid surgery light went away
// 411: inputs were incorrect, wrong person came to surgery
// 403: you were not allowed in the hospital

var users = [{
    name: "Rahul",
    kidneys: [{
        healthy: false,
    }, {
        healthy: true
    }]
}]

// GET: going for a consultation to get a check up
// user can check how many kidneys they have and their health
app.get("/noOfKidney", (req, res) => {
    const usersKidneys = users[0].kidneys;
    const noOfKidneys = usersKidneys.length;
    let healthyKidneys = 0;
    for(let i = 0; i < noOfKidneys; i++){
        if(usersKidneys[i].healthy){
            healthyKidneys++;
        }
    }
    const unhealthyKidneys = noOfKidneys - healthyKidneys;
    res.json({
        noOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.use(express.json());

// POST: going to get a new kidney
// user can add a new kidney
app.post("/addKidney", (req, res) => {
    const isHealthy = req.body.addKidney;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// PUT: going to get a kidney replaced
// user can replace a kidney, make it healthy
app.put("/replaceKidney", (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "All unhealthy kidneys have been replaced by healthy ones."
    })
})

// DELETE: going to get a kidney removed
// user can remove a kidney
app.delete("/removeUnhealthyKidney", (req, res) => {
    let atLeastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    if(!atLeastOneUnhealthyKidney){
        res.status(411).json({
            msg: "You have no unhealthy kidneys."
        });
    }else{
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "All unhealthy kidneys are removed."
        })
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})