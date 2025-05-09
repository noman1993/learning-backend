{
    //never | unknown | nullable

    //nullable

    const searchName = (value: string | null) => {
        if(value){
            console.log("searching");
            
        }else{
            console.log("there is nothing to search");
            
        }
    }
    searchName(null)


    //unknown
    const getSpeedInMeterPerSecond = (value:unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000)/3600
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }else if (typeof value === 'string'){
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseInt(result) * 1000)/3600
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else{
            console.log("wrong number");
            
        }
    }

    getSpeedInMeterPerSecond(null)


    //never

    const throwError = (msg:string):never => {
        throw new Error(msg)
    }
    throwError('hello error')
}