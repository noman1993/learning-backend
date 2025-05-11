{
  //constraints in typescript
  const createAStudent = <T extends {id:number,name:string, email:string}>(student: T) => {
    const course = "Create a next level developer";
    return {
      ...student,
      course,
    };
  };

  const student1 = createAStudent({
    id:222,
    name: "Rahim",
    email: "a@g.com",
    roll: 22,
  });
  const student2 = createAStudent({
    id:322,
    name: "Karim",
    email: "v@g.com",
    roll: 32,
  });
}
