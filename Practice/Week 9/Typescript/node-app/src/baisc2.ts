/////////////////////////////////----------------------------------------- Interface

// interface User {
//     firstname: string,
//     lastname: string,
//     email?: string, // optional
//     age: number
// }
// function isLegal(user: User): boolean {
//     if(user.age > 18){
//         return true;
//     }
//     return false;
// }
// console.log(isLegal({
//     firstname: "Sanket",
//     lastname: "Chamate",
//     email: "sanket@gmail.com",
//     age: 23
// }))

//////////////////////////// Interface as Class

// interface Person {
//     name: string,
//     age?: number, // optional
//     greet(phrase: string): void
// }

// class Employees implements Person { // if interface is used then greet function is compulsion, gives compilation error
//     name: string
//     age?: number

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }

//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}`)
//     }
// }

// const roy: Person = new Employees("Roy", 29)
// roy.greet("Hello")

/////////////////////////////////----------------------------------------- Types

// type User = {
//     name: string,
//     age?: number, // optional
//     greet(phrase: string): void
// }

// type a = number | string // give more that 1 type to variable
// function greet(id: a){
//     console.log(typeof(id));
// }
// greet(1)
// greet("1")


// let you create a type with properties of multiple interface/types

// type Employee = {
//     name: string,
//     startDate: Date
// }

// interface Manager {
//     name: string,
//     department: string
// }

// type TeamLead = Employee & Manager

// const teamLead: TeamLead = {
//     name: "sanket",
//     department: "SWE",
//     startDate: new Date()
// }

// console.log(teamLead);


/////////////////////////////////----------------------------------------- Arrays

// type NumberArray = number[] // interface can't do this
// function maxValue(arr: number[]): number{ // or arr: NumberArray
//     let max = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(maxValue([15,26,4]));

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }
// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18); // return users with age >= 18
// }
// console.log(filteredUsers([{
//     firstName: "aaa",
//     lastName: "bbb",
//     age: 21
// }, {
//     firstName: "ccc",
//     lastName: "ddd",
//     age: 19
// }, {
//     firstName: "eee",
//     lastName: "fff",
//     age: 13
// } ]));

/////////////////////////////////----------------------------------------- Enums

// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

// if we want user to select between a, b, c, d or 1,2,3,4 there is high chance that user may choose something different from options
// what we can do is use type or we can use enums

// type KeyInput = "a" | "b" | "c" | "d" // or = 1 | 2 | 3 | 4

// enum Direction1 { // default
//     Up, // 0            if given value 1        if given value 1
//     Down, // 1          this becomes 2          if given value 10
//     Right, // 2         this becomes 3          this becomes 11
//     Left // 3           this becomes 4          this becomes 12
// }

// enum Direction2 {
//     Up = "up",
//     Down = "down",
//     Right = "right",
//     Left = "left"
// }

// function doSomething(keyPressed1: Direction1, keyPressed2: Direction2){
//     console.log(keyPressed1);
//     console.log(keyPressed2);
// }

// doSomething(Direction1.Up, Direction2.Up)
// doSomething(Direction1.Down, Direction2.Down)
// doSomething(Direction1.Right, Direction2.Right)
// doSomething(Direction1.Left, Direction2.Left)


// enum for express

// instead of using 
// res.status(411) we can use 
// enum ResponseStatus {
//     Success = 200,
//     NotFount = 404,
//     Error = 500
// }
// and use it as ResponseStatus.NotFount


/////////////////////////////////----------------------------------------- Generic

// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// type Input = number | string
// function getFirstElement(arr: Input[]) {
//     return arr[0];
// }
// const el = getFirstElement([1, 2, 3]);
// el.toUpperCase()  giver error

// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors which can be solved using. number[] | string[]
// Typescript isn’t able to infer the right type of the return type

// function identity<T>(arg: T): T {
//     return arg;
// }
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// function getFirstElementSolution<T>(arr: T[]) {
//     return arr[0];
// }
// const elMix = getFirstElementSolution(["aaa", "jgng", 1, 2, true]); 
// const elStrictStr = getFirstElementSolution<string>(["aaa", "jgng"]); // if you want strict string type
// const elStr = getFirstElementSolution(["aaa", "jgng"]); // of type string
// const elNum = getFirstElementSolution([1 , 2]); // of type number
// console.log(elStr.toUpperCase() );


/////////////////////////////////----------------------------------------- Import/Export

// to install express and use typescript - 
// npm install express @types/express

// use -
// import express from "express"
// export const a = 1

// if export default then no need for - export {a} from "////something" jsut use export a from "something"