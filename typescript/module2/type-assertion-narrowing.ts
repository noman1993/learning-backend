
{
    //

    //type assertion

    let anything : any;

    anything = "Next Level";

    // (anything as string).




    const kgToGrm = (value: string | number):string | number | undefined => {
        if(typeof value ==='string'){
            const convertedValue = parseInt(value)*1000
            return `the converted value is ${convertedValue}`
        }else if(typeof value === 'number'){
            return value * 1000
        }
    }

    const result1 = kgToGrm('100') as string
    const result2 = kgToGrm(100) as number
    

    
    type CustomError = {
        message: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
        
    }



    //
}