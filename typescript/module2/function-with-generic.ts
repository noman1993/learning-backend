{
    //function with generic

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    type User = {
        name: string,
        age: number
    }

    const resultWithGeneric = createArrayWithGeneric<User>({
        name:"Rahim",
        age: 30
    })


    //function with generic and tuple
    const createArrayWithTuple = <T,Q>(param1:T, param2:Q):[T,Q] => {
        return [param1, param2]
    }

    const result1 = createArrayWithTuple<string, number>("Rahim", 20)

    //function with generic
    const createAStudent = <T>(student:T) => {
        const course = "Create a next level developer"
        return{
            ...student,
            course
        }
    }

    const student1 = createAStudent({name:"Rahim", email: "a@g.com", roll: 22})
    const student2 = createAStudent({name:"Karim", email: "v@g.com", roll: 32})

}