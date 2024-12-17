import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// insertUser("sanket@gmail.com", "123456", "sanket", "chamate")
// insertUser("riyu@gmail.com", "123456", "riyu", "bajaj")
// insertUser("aryan@gmail.com", "123456", "aryan", "roy")

// updateUser("riyu@gmail.com", {password: "852460"})

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