{

    // ternaty operator || optional chainning || nulish coalescing operator

    //ternary operator

    const age: number = 18

    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
    }

    const isAdult = age >= 18 ? "adult" : "not adult"
    console.log({isAdult});


    //nulish coalescing operator
    //null/undefined ---> decesion making

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : "Guest" 
    console.log({result1},{result2});
    

    // optional chainning

    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            parmanentAddress?: string
        }
    }

    const user:User = {
        name: "Rahim",
        address: {
            city: "DHK",
            road: "DHK",
            presentAddress: "DHK town"
        }
    }

    const parmanentAddress = user?.address?.parmanentAddress ?? "no parmanent address"
    console.log({parmanentAddress});
    
    
}