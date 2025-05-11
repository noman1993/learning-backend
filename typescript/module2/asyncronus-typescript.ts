{
    //basic promise

    type Todo = {
        id: number,
        userId: number,
        title: string,
        completed: boolean
    }

    const todos = async (): Promise<Todo> => {
       const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
       const data =await response.json()
       console.log(data);
       
    }
    todos()




    //asyncronus typescript concept
    type Hello = {
        hello: string
    }
    const createPromise = ():Promise<Hello> => {
        return new Promise<Hello>((resolve,reject) => {
            const data: Hello = {hello: "Hello"}
            if(data) {
                resolve(data)
            }else{
                reject("failed to load data")
            }
        })
    }

    //calling promise function

    const showData = async () => {
        const data:Hello = await createPromise()
        console.log(data);
        
    }
    showData()









    
}