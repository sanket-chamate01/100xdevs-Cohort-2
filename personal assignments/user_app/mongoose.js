const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://sanket:sanket@cohort.bq8x5.mongodb.net/user_app"
);

const User = mongoose.model("user", {
    name: String,
    username: String,
    password: String
});

const user = new User({
    name: "Sanket Chamate",
    username: "ryullen",
    password: "sanket01"
})

user.save();