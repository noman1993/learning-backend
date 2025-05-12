{
    //class and object

    class Animal {

        constructor(public name:string,public species:string,public sound:string){}

        makeSound(){
            console.log(`this ${this.name} says ${this.sound}`);
            
        }
    }


    const dog = new Animal("German Shepard", "Dog", "Ghew Ghew")
    const cat = new Animal ("Gorer Bilai","Bilai","mew mew")
    cat.makeSound()
    dog.makeSound()
    
}