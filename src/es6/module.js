export let one = 1;

let two = 2;
export {two};

let three = 3;
let four = 4;

export {three as third, four};

export class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi() {
    console.log("Hello!");
}