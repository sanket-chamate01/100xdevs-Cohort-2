import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function insertTodo(username: string, password: string, firstname: string, lastname: string){
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

async function updateTodo(username: string, value : UpdateParams){ // or {firstname, lastname, password} : UpdateParams
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

async function deleteTodo(username: string){
    const res = await prisma.user.delete({
        where: {
            username
        }
    })
    console.log(res)
}

async function getTodo(username: string){
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(res)
}