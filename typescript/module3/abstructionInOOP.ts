{
    // abstruction in oop

    // interface

    //idea

    interface Vehicle1 {
        startEngine(): void;
        stopEngine():void;
        move():void
    }

    //real implementation

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car`);
            
        }

        stopEngine(): void {
            console.log(`I am stoping the car`);
            
        }

        move(): void {
            console.log(`I am moving the car`);
            
        }

        test(){
            console.log(`I am moving the car`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine()


    //abstruct class

    //idea
    abstract class Car2 {
        abstract startEngine(): void 

        abstract stopEngine(): void 

        abstract move(): void 
    }

    //implementation

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car`);
            
        }
        stopEngine(): void {
            console.log(`I am stoping the car`);
            
        }

        move(): void {
            console.log(`I am moving the car`);
            
        }
    }
}