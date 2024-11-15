// ugly way

const fs = require("fs");

// our own async func
function cutomReadFile(callBack){
    fs.readFile("Practice/Week1/a.txt", "utf-8", function(err, data){
        callBack(data);
    })
}

function onDone(data){
    console.log(data);
}

console.log("Before function calling");

cutomReadFile(onDone);

console.log("After function calling");