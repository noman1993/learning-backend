{
    // conditional type

    type a1 = string
    type b1 = number

    type x = a1 extends null ? true : false
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any


    type Sheikh = {
        bike: string,
        car: string,
        ship: string
    }

    type checkVehicle<T> = T extends keyof Sheikh ? true : false
    
    type hasCar = checkVehicle<"car">
}