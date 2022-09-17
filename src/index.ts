//Tipos: String, boolean, number...

//Anotation
let x: number = 11;

//Inferência
let y = 11;

//Objetos String, tipo string 
//Tipos básicos
let firstName: string = 'Yuri'
let age: number = 30;
const isAdmin: boolean = true;

//Objects
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.json()); //Não consigo passar métodos que não sejam de array

myNumbers.push(5);
console.log(myNumbers);

//Tuplas -> tuple
//Arrays que determinam  cada elemento. Existe muito em python, mas não pode modificar nenhum dos elementos
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ['a', 'b']];
// myTuple = [5, "teste", ['a', 2]]; //Não pode

//Object literals -> {props: value}
//Definição de dados pedidos, muito usado em classes
const user: { name: string, age: number } = {
    name: 'Yuri',
    age: 18

}

console.log(user);
console.log(user.name );

//Dados any
//Aceita todos os tipos, porém não é recomendado
let a: any = 0;
a = 'teste';
a = true;
a = [1,2,'A', false];

//Union Type
//Unir tipos para criar tipos mais complexos
let id: string | number = "10";

id = 200
// id = []; // Não funcioan

//Type alias
//Criação de grupo de tipos
type myIdType = number | string | [number, string];

const UserId: myIdType = 10;
const UserId2: myIdType = '001';
const UserId3: myIdType = [5, '02'];

//Enum 
 