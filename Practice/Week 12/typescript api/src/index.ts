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

/////////////////////////////////// --------------------- ReadOnly

// const a = [1,2,3]
// a[1] = 5                is valid
// a = [4,5,6]             is invalid

// in first, we are changing inside value of const (object) but in second we tried to change reference to const
// to prevent even that we use ReadOnly

type User1 = {  // User1 type has all properties as readonly, so they cannot be changed once assigned
    readonly name: string
    readonly age: number
}

// or

type readOnlyProps = Readonly<User>; // User type with all properties as readonly

/////////////////////////////////// --------------------- Record

// Record<K, T> - Construct a type with a set of properties K of type T
// key - value pair

type uglyRecordProps = { // ugly way
    [key: string]: {
        name: string,
        age: number
    }
}

type recordProps = Record<string, User>; // better way

const user1: recordProps = {
    'sasvba': {
        id: 'sasvba',
        name: 'John',
        age: 25,
        email: 'john@example.com',
        password: 'johnpassword'
    },
    'plsas1': {
        id: 'plsas1',
        name: 'Doe',
        age: 35,
        email: 'doe@example.com',
        password: 'doepassword'
    }
}

/////////////////////////////////// --------------------- Map

// Map is a type that represents an object that maps keys to values

const mapProps = new Map<string, User>()

mapProps.set('sasvba', {
    id: 'sasvba',
    name: 'John',
    age: 25,
    email: '',
    password: ''
})
mapProps.delete('sasvba')

/////////////////////////////////// --------------------- Exclude

// Exclude<T, U> - Exclude from T those types that are assignable to U

type excludeProps = Exclude<User, { id: string, password: string }> // exclude id and password from User

