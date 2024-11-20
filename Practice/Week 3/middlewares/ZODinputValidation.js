const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// email : string
// password : 8 letters
// country: "IN" or "US"

// const schema  = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),  // zod.string().length(8) for exact length
//     country: zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json());

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "Wrong input."
        })
    }else{
        res.send({
            response
        })
    }
    
    // const length = kidneys.length;
    // res.send("You have " + length + " kidneys.");
})

app.listen(3000);