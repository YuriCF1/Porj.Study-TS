//Tipos: String, boolean, number...

//Anotation________________________________________________________________
let x: number = 11;

//Inferência________________________________________________________________
let y = 11;

//Objetos String, tipo string________________________________________________________________
//Tipos básicos
let firstName: string = 'Yuri'
let age: number = 30;
const isAdmin: boolean = true;

//Objects________________________________________________________________
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.json()); //Não consigo passar métodos que não sejam de array

myNumbers.push(5);
console.log(myNumbers);

//Tuplas -> tuple________________________________________________________________
//Arrays que determinam  cada elemento. Existe muito em python, mas não pode modificar nenhum dos elementos
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ['a', 'b']];
// myTuple = [5, "teste", ['a', 2]]; //Não pode

//Object literals -> {props: value}________________________________________________________________
//Definição de dados pedidos, muito usado em classes
const user: { name: string, age: number } = {
    name: 'Yuri',
    age: 18

}

console.log(user);
console.log(user.name);

//Dados any________________________________________________________________
//Aceita todos os tipos, porém não é recomendado
let a: any = 0;
a = 'teste';
a = true;
a = [1, 2, 'A', false];

//Union Type________________________________________________________________
//Unir tipos para criar tipos mais complexos
let id: string | number = "10";

id = 200
// id = []; // Não funcioan

//Type alias________________________________________________________________
//Criação de grupo de tipos
type myIdType = number | string | [number, string];

const UserId: myIdType = 10;
const UserId2: myIdType = '001';
const UserId3: myIdType = [5, '02'];

//Enum_______________________________________________________________________
// Enumerar uma coleção de dados
// Ex: Determinar no sistema, o tamanho de roupas, sem  ficar escrevendo o tamanho como 
// '(size: Médio, size: Pequeno)'
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'

}

const camisa = {
    name: "Camisa gola V",
    size: Size.M

}

console.log(camisa.size); //Grande

//Literal types______________________________________________________________
//Dá um valor prévio para a variável, não consigo mudar, apenas confirmálo
let teste: "Algum valor";
// teste = "outro   valor" //Não consigo mudar
teste = "Algum valor" //Atribuo

// Exemplo. Usutário entrando no sistema
let autenticado: "sim" | null;
autenticado = 'sim'; //Atribui o único valor provável
autenticado = null; //Confirma que não está

//Funções___________________________________________________________________ 
function sum(a: number, b: number) { //Tipar as variáveis nas funções. Ou dá erro
    return a + b

}

// console.log(sum("Abelhas", true)); //Não funciona

function sayHelloTo(name: string): string {
    // return true //Erro
    return `Hello ${name}`

}

console.log(sayHelloTo('Yuri'));

//Quando a função não retorna nada
function logger(msg: string): void {
    console.log(msg);

}

logger('Testando')

//Dado opcional________________________________________________________________
function greeting(name: string, greet?: string): void {
    // console.log(`Olá ${greet} ${ name}`); // greeting('Jose'); = Olá undefined José. Tem que tratar o dado, ver se ele veio ou não
    if (greet) {
        console.log(`Olá, ${greet} ${name}`)
        return;
    }

    console.log(`Olá, ${name}`);
}
greeting('José', 'Sr.');
greeting('José');

// Interfaces________________________________________________________________
//Padronização de algo para usar como tipo

interface MathFunctionParams {
    n1: number,
    n2: number,

}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumbers({ n1: 1, n2: 2 })); //Se declara a interface assim


function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}
console.log(multiplyNumbers({ n1: 1, n2: 2 })); //Se declara a interface assim

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 2

}

console.log(multiplyNumbers(someNumbers)); // = 10

// Narrowing
//Checar os tipos. A forma de garantir que um tipo seja mantido numa sequência de código. Feito na linha 119, com o 'greeting'
//Muito usado quando se há a necessidade de lidar com a imprevisilibdade do dado que virá
function doSomething(info: number | boolean) { //Verificando se o tipo de dado é numérico
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return
    }
    console.log(`Não foi passado um número`);
    console.log(typeof info);
}

doSomething(5) // 'O número é 5

//Generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);

    })
}

const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c']

console.log(a1);
console.log(a2);

// Clases
class User {
    // name: string //Não faz sentido declarar o tipo aqui, pois ele reclama que não tem inicializador
    // role
    // isApproved

    public name;
    public role;
    public isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved

    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);

    }

    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`O cargo do usuário é: ${this.role}`);
            return;

        }
        console.log('Informação restrita');
    }
}

const zeca = new User('Zeca', 'Admin', true)
console.log(zeca);

zeca.showUserName()
zeca.showUserRole(true)

//Interfaces em classes 
interface IVehicle { //Normalmente começa com I para explicitar a interface
    brand: string,
    showbrand() : void
}

class Car implements IVehicle {

    public brand
    public wheels
    
    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
          
    }

    showbrand(): void {
        console.log(`A marca do carro é: ${this.brand}, com ${this.wheels} rodas`);
 

    }
}

const car1 = new Car('Ford', 4)

console.log(car1);
car1.showbrand()