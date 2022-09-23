"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 11;
let y = 11;
let firstName = 'Yuri';
let age = 30;
const isAdmin = true;
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ['a', 'b']];
const user = {
    name: 'Yuri',
    age: 18
};
console.log(user);
console.log(user.name);
let a = 0;
a = 'teste';
a = true;
a = [1, 2, 'A', false];
let id = "10";
id = 200;
const UserId = 10;
const UserId2 = '001';
const UserId3 = [5, '02'];
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M
};
console.log(camisa.size);
let teste;
teste = "Algum valor";
let autenticado;
autenticado = 'sim';
autenticado = null;
function sum(a, b) {
    return a + b;
}
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Yuri'));
function logger(msg) {
    console.log(msg);
}
logger('Testando');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
        return;
    }
    console.log(`Olá, ${name}`);
}
greeting('José', 'Sr.');
greeting('José');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 1, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 2
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado um número`);
    console.log(typeof info);
}
doSomething(5);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
console.log(a1);
console.log(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O cargo do usuário é: ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showbrand(carro, tipo) {
        if (carro != 'SuperC') {
            console.log(`A marca do carro é: ${this.brand}, com ${this.wheels} rodas`);
            return;
        }
        if (tipo instanceof SuperCars) {
            console.log(`A marca do carro é: ${this.brand}, com ${this.wheels} rodas, e o motor é ${tipo.engine.toFixed(1)}`);
        }
    }
}
const car1 = new Car('Ford', 4);
console.log(car1);
car1.showbrand('super');
class SuperCars extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const car2 = new SuperCars("Audi", 4, 2.0);
console.log(car2);
car2.showbrand('SuperC', car2);
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
