function sum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function findSum(){
    console.log(sum(100));
}

setTimeout(findSum, 2000); 
console.log("Wait for 2sec...."); 