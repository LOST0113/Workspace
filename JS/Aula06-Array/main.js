let numeros = [54, 111, 58, 853, 17, 75, 30]
// Array unidimensional

console.log(numeros);

let matrix = [
    ["ICarly", 2011, 10],
    ["Os Fet de EverlyPlace", 2009, 10],
    ["Doug", 1999, 8.7]
]
console.log(`Antes : ${matrix}`);
matrix[2][1] = 1800;
console.log(`Depois : ${matrix}`);

let nuns = [54, 111, 58, "853", "17", 75, 30];

console.log(`Antes: ${nuns}`);
nuns[3] = "hora do lanche";
console.log(`Depois: ${nuns}`);

//Métodos em arrays

let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

// Join
let test1 = [0, 1, 2, 3, 4, 5];
let test2 = test1.join(" *** ");
console.log(test2);
console.log(typeof test2);

//Tamanho de Arrays
let array = [0, 1, 2, 3, 4];
console.log(array.length);

//Remover e inserir elementos
// pop()

const frutas1 = ["Banana", "Laranja", "Maçã", "Manga"];
let x = frutas1.pop(); // x = "Manga"

console.log(frutas1);
console.log(x);

// push()

const frutas2 = ["Banana", "Laranja", "Maçã", "Manga"];
let y = frutas2.push("Kiwi"); // y = 5

console.log(frutas2);
console.log(y);

//shift

const frutas3 = ["Banana", "Laranja"];
let z = frutas3.shift(); // z = "Banana"

console.log(frutas3);
console.log(z);

//unshift()

const frutas4 = ["Banana", "Laranja"];
let w = frutas4.unshift("Kiwi");

console.log(frutas4);
console.log(w);

// delete

const frutas5 = ["Banana", "Laranja", "Maçã", "Manga"];
delete frutas5[2];

console.log(frutas5);

