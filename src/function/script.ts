function GetType<T> (val: T): string {
    return typeof (val);
}

const aStr = 'A String';
const aNum = 10;

document.write(`${GetType(aStr)} <br />`);

document.write(`${GetType(aNum)} <br />`);

