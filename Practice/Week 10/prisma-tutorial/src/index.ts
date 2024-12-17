import { PrismaClient } from "@prisma/client"

// if we write wrong wueries or commands and there is error then also id increments that's why riyu get id = 3

const prisma = new PrismaClient()

// insertUser("sanket@gmail.com", "123456", "sanket", "chamate")
// insertUser("riyu@gmail.com", "123456", "riyu", "bajaj")
// insertUser("aryan@gmail.com", "123456", "aryan", "roy")
// insertUser("aryan2@gmail.com", "123456", "aryan2", "roy")

// updateUser("riyu@gmail.com", {password: "852460"})

// deleteUser("aryan2@gmail.com")

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