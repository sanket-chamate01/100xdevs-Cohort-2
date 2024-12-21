/////////////////////////////////// --------------------- Pick
// like a subset type of User type

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type pickProps = Pick<User, 'name' | 'age' | 'password'> // let's say only these properties can be updated


/////////////////////////////////// --------------------- Partial
// make all properties of type optional, creating a type with same properties but optional

type partialProps = Partial<pickProps>; // but user may/may-not want to update all the allowed properties
