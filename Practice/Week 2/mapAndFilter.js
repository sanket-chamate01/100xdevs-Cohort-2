const input = [1,2,3,4,5];

function transform(i){
    return i * 2;
}

function isEven(i){
    return (i % 2 == 0);
}

const ans = input.map(transform);
console.log(ans); // [ 2, 4, 6, 8, 10 ]

const sol = input.filter(isEven);
console.log(sol); // [ 2, 4 ]