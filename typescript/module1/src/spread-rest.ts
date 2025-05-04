{

// spread operator

const mentors1 ={
    ts : "Rahim",
    redux: "Jasim",
    dbms: "karim"
}

const mentors2 ={
    cloud : "Jabbar",
    next: "Akash",
    prisma: "Batash"
}


const mentorList = {...mentors1,...mentors2}


// rest operator

const greetFriends = (...friends : string[]) =>{
    friends.forEach((friend:String)=>console.log(`Hi ${friend}`)
    )
}

greetFriends("Rahim", "Karim", "Jabbar")





}