{
    // conditional type

    type a1 = string
    type b1 = number

    type x = a1 extends null ? true : false
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any
}