interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number) {}

    drive(): void {
        document.write(`The car drives with ${this.wheels} wheels <br />`);
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number) {}

    drive(): void {
        document.write(`The bicycle drives with ${this.wheels} wheels <br />`);
    }
}

const car = new Car(4);
const bike = new Bicycle(2);

car.drive();
bike.drive();


function GetWheels<w extends Vehicle> (veh: w): number {
    return veh.drive();
}

GetWheels(car);
GetWheels(bike);
