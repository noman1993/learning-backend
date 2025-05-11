{
    //constraints using key of

    type Person = {
        name: string;
        age: number;
        location: string;
      };
      
      function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
      
      const person: Person = { name: "Alice", age: 30, location: "Paris" };
      
      // Valid
      const name = getProperty(person, "name");
      
      // Error: Argument of type '"email"' is not assignable to parameter of type '"name" | "age" | "location"'
      // const email = getProperty(person, "email");
      
}