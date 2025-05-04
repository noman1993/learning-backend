{

    // type alias

type Student = {
    name: string,
    age: number,
    contactInfo? :string,
    gender: string,
    address: string
}

const student1: Student = {
    name:"Rahim",
    age:23,
    gender:'Male',
    address: "Khulna"
}

const student2: Student = {
    name:"Karim",
    age:23,
    gender:'Male',
    contactInfo:"01789999999",
    address: "Khulna"
}

// type alias in string and boolean

type UserName = string
type IsAdmin = boolean

const userName:UserName = "Rahim"
const isAdmin: IsAdmin = true


// type alias in function

type Add = (num1:number,num2:number ) => number

const add : Add = (num1, num2) => num1 + num2





}