/*import {one as first, two, third, four, User, sayHi} from "./module.js";
console.log(first, two, third, four);
sayHi();
let user = new User("Andrej");
console.log(user);*/

import * as module from "./module.js";
import Person from './user.js';

console.log(module.one, module.two, module.third, module.four);
module.sayHi();
let user = new module.User("Andrej");
console.log(user);

let person = new Person("Вася");
console.log(person);