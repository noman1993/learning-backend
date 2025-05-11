{
    //mapped types

    const arrayOfNumbers: number[] = [1,2,3]

    const arrayOfString: string[] = arrayOfNumbers.map((number)=> number.toString())

    console.log(arrayOfString);
    
}