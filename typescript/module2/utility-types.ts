{
    // utility types

    // pick

    type Person = {
        name: string,
        age: number,
        email?:string,
        contactNo: string
    }

    type NameAge = Pick <Person, "name" | "age">


    //Omit

    type ContactInfo = Omit <Person, "name" | "age">

    //required

    type PersonRequired = Required<Person>

    //partial 

    type PersonPartial = Partial<Person>

    //readOnly

    type PersonReadOnly = Readonly<Person>



    //Record
    type MyJob =    Record<string, string>

    const obj1: MyJob = {
        a: "aa",
        b: "bb",
        c: "cc"
    }
}