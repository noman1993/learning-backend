{
    // generic with interface

    interface Developer <T,X=null> {
        name: string,
        computer: {
            brand: string,
            model: string
        },
        smartWatch: T,
        bike? : X
    }

    type SamsungWatch = {
        brand: string,
        model: string,
        heartTrack:boolean,
        sleepTrack:true
    }

    const developer1 : Developer<SamsungWatch> = {
        name: "RAhim",
        computer: {
            brand: "HP",
            model: "u-43"
        },
        smartWatch: {
            brand: "samsung",
            model: "y-32",
            heartTrack: true,
            sleepTrack: true
        }
    }

    interface SamsungWatch2 {
        brand:string,
        model:string
    }

    type HeroBike = {
        brand: string,
        releaseYear: number
    }

    const developer2 : Developer<SamsungWatch2, HeroBike> = {
        name: "RAhim",
        computer: {
            brand: "Asus",
            model: "t-33"
        },
        smartWatch: {
            brand: "samsung",
            model: "y-32"
        },
        bike:{
            brand: "Honda",
            releaseYear: 2022
        }
        

    }


}