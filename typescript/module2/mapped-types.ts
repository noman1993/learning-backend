{
    //mapped types

    const arrayOfNumbers: number[] = [1,2,3]

    const arrayOfString: string[] = arrayOfNumbers.map((number)=> number.toString())

    console.log(arrayOfString);


    type AreaNumber = {
        height: number,
        width: number
    }

    type AreaString = {
        [key in keyof AreaNumber] : string
    }


    type areaElement<T> = {
        [key in keyof T] : T[key]
    }


    const area1 : areaElement<{height:string, width: number}> = {
        height: "100",
        width: 50
    }
    
}