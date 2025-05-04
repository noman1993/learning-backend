{


    //union types

    type Subject = "Bangla" | "Engkish"

    const subjectChoice : Subject = "Bangla"

    type User = {
        name: string,
        email: string,
        gender: "male" | "female",
        blood: "O+" | "A+" | "B+"

    }

    const user1: User = {
        name: "Rahim",
        email: "abs@f.c",
        gender: "male",
        blood: "O+"
    }




    //intersection types

    type FrontendDeveloper = {
        skills:string[],
        designation1: "Frontend Devaloper"
    }

    type BackendDeveloper = {
        skills:string[],
        designation2: "Backend Devaloper"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper = {
        skills: ["HTML","CSS","Express"],
        designation1: "Frontend Devaloper",
        designation2: "Backend Devaloper"
    }
}