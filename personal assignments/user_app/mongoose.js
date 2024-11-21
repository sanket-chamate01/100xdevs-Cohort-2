const mongoose = require("mongoose");

mongoose.connect(
    "url"
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