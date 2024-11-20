function promisified(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
    return p;
}
console.log("Before Promise");
let a = promisified(5000);
console.log(a);
a.then(() => {
    console.log("After Promise returned");
});
console.log("End");
setTimeout(() => console.log(a), 6000); 