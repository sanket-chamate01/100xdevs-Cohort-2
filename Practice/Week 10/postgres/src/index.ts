import { Client } from "pg"

const client = new Client({
    connectionString: "url"
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
    client.end()
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

async function findUserData(username: string){
    await client.connect()
    const insertQuery = "select * from users where username = $1;"
    const values = [username]
    const result = await client.query(insertQuery, values)
    if(result.rows.length > 0){
        console.log("User found: ", result.rows[0])
    }else{
        console.log("No user found")
    }
    client.end()
}

async function createAddressTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            state VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `)
    console.log(result)
    client.end()
}

async function insertAddressData(user_id: number, city: string, country: string, state: string, pincode: number){
    await client.connect()
    const insertQuery = "insert into address (user_id, city, country, state, pincode) values ($1, $2, $3, $4, $5);"
    const values = [user_id, city, country, state, pincode]
    const result = await client.query(insertQuery, values)
    console.log(result)
    client.end()
}

async function getUserFullDataUsingJoins(){
    await client.connect()
    const result = await client.query(`
        SELECT u.id, u.username, u.email, a.city, a.country, a.state, a.pincode
        FROM users u
        JOIN address a ON u.id = a.user_id
        WHERE u.id = 1;
    `)
    if(result.rows.length > 0){
        console.log("User found: ", result.rows)
    }else{
        console.log("No user found")
    }
    client.end()
    client.end()
}

// createUsersTable()
// insertUserData()
// insertUserDataFromArguments('chris', 'chris@gmail.com', '123')
// findUserData('zen')
// createAddressTable()
// insertAddressData(1, 'Nagpur', 'India', 'Maharashtra', 441110)
// insertAddressData(1, 'Pune', 'India', 'Maharashtra', 411057)
// insertAddressData(3, 'Patna', 'India', 'Bihar', 800001)
getUserFullDataUsingJoins()