/* //keyof
interface User {
    id: number;
    name:string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "id"; */

//Partial <T>

/* interface User {
    id:number;
    name:string;
    age: number;
    gender: "m" | "f"
}

let admin: Partial<User> = {
    id:1,
    name: "Bob",
}; */

/* // Required<T>

interface User {
    id:number;
    name:string;
    age?: number;
}

let admin: Required<User> = {
    id:1,
    name: "Bob"
    // Required라 age 있어야함.
}; */

// Readonly<T>

interface User {
    id:number;
    name:string;
    age?: number;
}

let admin: Readonly<User> = {
    id:1,
    name: "Bob"
};

admin.id = 4;
