import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://Cohort_owner:ZdWxlaIk4K9p@ep-silent-frost-a42mwg9h.us-east-1.aws.neon.tech/Cohort?sslmode=require"
})

async function createUsersTable(){
    await client.connect()
    const result = await client.query(`
        create table users(
            id serial primary key,
            username varchar(20) unique not null,
            email varchar(50) unique not null,
            password varchar(30) not null,
            created_at timestamp with time zone default current_timestamp
        );
    `)
    console.log(result)
}

async function insertUserData(){
    await client.connect()
    const result = await client.query(`
        insert into users (username, email, password)
        values ('jonas', 'jonas@gmail.com', '123');
    `)
    console.log(result)
    client.end()
}

async function insertUserDataFromArguments(username: string, email: string, password: string){
    await client.connect()
    const insertQuery = "insert into users (username, email, password) values ($1, $2, $3);"
    const values = [username, email, password]
    const result = await client.query(insertQuery, values)
    console.log(result)
    client.end()
}

// createUsersTable()
// insertUserData()
insertUserDataFromArguments('chris', 'chris@gmail.com', '123')