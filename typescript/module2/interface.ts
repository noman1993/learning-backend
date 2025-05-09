{
    //interface vs type alias

    type User1 = {
        name:string,
        age: number
    }

    interface User2 {
        name: string,
        age: number
    }

    type UserWithRoll1 = User1 & {roll : string}
    interface UserWithRoll2 extends User2 {roll:string}

    const user1:UserWithRoll2 = {
        name : "Rahim",
        age : 22,
        roll: "student"
    }


    //js --> object, array --> object, function --> object

    //aray --> type vs interface
    type Roll1 = number[]
    interface Roll2 {
        [index: number] : number
    }

    const rollNumber1 : Roll2 = [1,2,3,4]

    //function --> type vs interface

    type Add = (num1:number, num2:number) => number
    interface Add2 {
        (num1:number, num2:Number):number
    }

    const add:Add =(num1,num2) => num1 + num2
    const add2:Add2 =(num1,num2) => num1 + num2

    console.log(add2(2,3));
    

}