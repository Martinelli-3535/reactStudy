class Car {
    name: string = "car";
    color: string;
    constructor(color:string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
} 

class ExpensiveCar extends Car {
    constructor(color: string) {
        super(color);
    }
    showName() {
        console.log(super.name);
    }

}

const z4 = new ExpensiveCar("red");
console.log(z4.name);