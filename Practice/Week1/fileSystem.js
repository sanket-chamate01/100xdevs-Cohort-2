const fs = require("fs");
// filesystem module

fs.readFile("Practice/Week1/a.txt", "utf-8", function(err, data){ // also an async func
    console.log("Content: " + data);
    console.log("Error: " + err);
})

console.log("Hello");
