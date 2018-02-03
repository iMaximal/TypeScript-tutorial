class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}

const aNumber = new GenericNumber<number>();

aNumber.add = function (x, y) {
    return x + y;
};

document.write(`5 + 4 = ${aNumber.add(5, 4)} <br />`);
