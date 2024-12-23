import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// -------------------------------------------------------------- User --------------------------------------------------------------

// insertUser("sanket@gmail.com", "123456", "sanket", "chamate")
// insertUser("riyu@gmail.com", "123456", "riyu", "sharma")
// insertUser("aryan@gmail.com", "123456", "aryan", "roy")
// insertUser("parth@gmail.com", "123456", "parth", "bajaj")


async function insertUser(username: string, password: string, firstname: string, lastname: string){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    })
    console.log(res)
}

interface UpdateParams {
    firstname?: string,
    lastname?: string,
    password?: string
}

async function updateUser(username: string, value : UpdateParams){ // or {firstname, lastname, password} : UpdateParams
    const res = await prisma.user.update({
        where: {
            username: username
        },
        data: {
            firstname: value.firstname,
            lastname: value.lastname,
            password: value.password
        }
    })
    console.log(res)
}

async function deleteUser(username: string){
    const res = await prisma.user.delete({
        where: {
            username
        }
    })
    console.log(res)
}

async function getUser(username: string){
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(res)
}

// -------------------------------------------------------------- Todo --------------------------------------------------------------

// insertTodo("First Todo", "This is the first todo", false, 1)
// insertTodo("Second Todo", "This is the second todo", true, 1)
// insertTodo("Third Todo", "This is the third todo", false, 4)
// insertTodo("Fourth Todo", "This is the fourth todo", false, 2)
// insertTodo("Fifth Todo", "This is the fifth todo", false, 3)
// insertTodo("Sixth Todo", "This is the sixth todo", false, 3)

// getAllTodo()

getUserAndTodos(3)

async function insertTodo(title: string, description: string, done: boolean, userId: number){
    const res = await prisma.todos.create({
        data: {
            title,
            description,
            done,
            userId
        }
    })
    console.log(res)
}

interface UpdateParams {
    description?: string,
    done?: boolean,
}

async function updateTodo(title: string, value : UpdateParams){ // or {firstname, lastname, password} : UpdateParams
    const res = await prisma.todos.update({
        where: {
            title: title
        },
        data: {
            description: value.description,
            done: value.done
        }
    })
    console.log(res)
}

async function deleteTodo(title: string){
    const res = await prisma.todos.delete({
        where: {
            title
        }
    })
    console.log(res)
}

async function getTodo(title: string){
    const res = await prisma.todos.findMany({
        where: {
            title
        }
    })
    console.log(res)
}

async function getAllTodo(){
    const res = await prisma.todos.findMany()
    console.log(res)
}

async function getUserAndTodos(userId: number){
    const res = await prisma.todos.findMany({
        where: {
            userId
        },
        select: {
            title: true,
            description: true,
            done: true,
            user: true
        }
    })
    console.log(res)
}