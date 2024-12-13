// const x: number = 1
// console.log(x);

// function greets(name: string){
//     console.log("Hello " + name)
// }
// greets("Sanket")

// function sum(a: number, b: number): number{
//     return a + b;
// }
// const value = sum(5,3) // or const value: number = sum(5,3)
// console.log(value)

// function isLegal(age: number): boolean {
//     if(age > 18){
//         return true
//     }
//     return false
// }
// console.log(isLegal(25))

function runAfter3Sec(fn: () => void){
    setTimeout(fn, 3000)
}
runAfter3Sec(() => {
    console.log("Executed after 3 sec")
})

