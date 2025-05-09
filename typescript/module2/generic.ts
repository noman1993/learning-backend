{
    //generic type

    type GenericArray<T> = Array<T>

    //const rollNo:number[] =[2,4,6]
    const rollNo:GenericArray<number> =[2,4,6]
    
    const mentor:GenericArray<string> = ['Rahim', 'Karim', 'Jabbar']

    const boolArray:GenericArray<boolean> = [true, false, true] 

    //generic array of object

    const user :GenericArray<{name:string, age:number}> = [
        {
            name: "Rahim",
            age: 20
        },
        {
            name: "Jabbar",
            age: 10
        }
    ]


    //generic tuple

    type GenericTuple<x,y> = [x, y]

    const men:GenericTuple<string, string> = ["kalam","abul"]
    const data: GenericTuple<number, {name:string,roll:string}> = [1234, {name:"Rahim", roll:"student"}]

}   