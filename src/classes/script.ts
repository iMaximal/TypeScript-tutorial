class Animal {
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        document.write(`${this.name} is owned by ${this.owner} <br />`);
    }

    static howManyAnimals(): number {
        return  Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

}

const spot = new Animal('Spot', 'Doug');

spot.ownerInfo();

spot.weight = 100;

document.write(`Spot's Weight is ${spot.weight} <br />`);

document.write(`# of Animals : ${Animal.howManyAnimals()} <br />`);


class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);

        Dog.numOfAnimals++;
    }
}

const grover = new Dog('Grover', 'Jimmy');

document.write(`# of Animals : ${Animal.howManyAnimals()} <br />`);

document.write(`Is a Dog an Animal : ${grover instanceof Animal} <br />`);

document.write(`Does grover have a name : ${('name' in grover)} <br />`);
