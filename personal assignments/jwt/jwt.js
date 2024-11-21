const jwt = require("jsonwebtoken")
const secret = "123123"

const value = {
    name: "Sanket",
    accountNumber: 123456789
}

// sign
const token = jwt.sign(value, secret);
console.log(token);
jwt.decode()
// verify
const verified = jwt.verify(token, secret);
console.log(verified);