{



// object destructuring

const user = {
    id: 345,
    name: {
        fName: "Rahim",
        mName: "Jabbar",
        lName: "Karim"
    },
    contactInfo: "01670000000",
    address: "Lanka"
}

const {contactInfo:phoneNumber, name:{mName:middleName}, address} = user

// Array destructuring

const myFriends = ["Rahim", "Karim", "Allah", "Jabbar", "Mujib"]

const [,,bestName,...rest] = myFriends











}