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

    class Car implements Vehicle1 {
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

    const toyotaCar = new Car();
    toyotaCar.startEngine()
}