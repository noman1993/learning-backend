{
    //type guirds

    // typeof -->> type guird

    type Alphaneumeric = string | number

    const add = (param1: Alphaneumeric, param2: Alphaneumeric):Alphaneumeric => {
        if(typeof param1==='number' && typeof param2==='number'){
            return param1 + param2
        }else {
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add(2,3)
    const result2 = add(2,'2')
    console.log(result1);
    console.log(result2);


    // in guard
    // in guard use in object


    type NormalUser = {
        name:string
    }

    type AdminUser = {
        name: string;
        role: string
    }

    const getUser = (user: NormalUser | AdminUser) => {
        
        if('role' in user){
            
            console.log(`My name id ${user.name} and my role is ${user.role}`);
            
        }else{
            console.log(`My name id ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Rahim"
    } 

    const adminUser: AdminUser = {
        name: "Rahim",
        role: "admin"
    } 

    getUser(adminUser)
    

    
}