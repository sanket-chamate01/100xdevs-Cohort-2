const fs = require("fs");

// our own async func
function cutomReadFile(){
    return new Promise(function(resolve){
        fs.readFile("Practice/Week1/a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

console.log("Before function calling");

cutomReadFile().then(onDone);

console.log("After function calling");

// promise is retured synchronously but the data is returned asynchronously
// promise has 3 stages - pending, resolved, rejected

var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("hey");
    }, 10000);
});

function callBack(){
    console.log(d);
}

console.log(d);
d.then(callBack);