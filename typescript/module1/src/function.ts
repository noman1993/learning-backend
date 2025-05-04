// function

// normal function

function add (a:number, b:number):number {
    return a + b
}

add(2,4)


// arrow function
const minus = (a:number, b:number):number => {
    return a - b
}

minus (40, 30)

// object function --->> method

const poorUser = {
    name: "Noman",
    balace: 0,
    addBalance(balance:number):string{
        return `My running balance is : ${this.balace + balance}`
    }
}