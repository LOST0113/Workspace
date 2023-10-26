let ProfessorBateAluno = true;
let ProfessoraXingaAluno = true;

if (ProfessoraXingaAluno == true && ProfessorBateAluno == true) {
    console.log("Professora demitida com sucesso!!!");
}

console.clear();
if (ProfessorBateAluno == true || ProfessoraXingaAluno == true) {
    console.log("Professora demitida com sucesso!!!");
}

let numero1 = 10;
let numero2 =  4;

if (numero1 == numero2) {
    console.log("os dois são diferentes");
}

let spanv = document.getElementById("span");

let rNum = () => {
    return Math.floor(Math.random() * 100);
}

let start = () => {
    let rnum = rNum();
    visor.innerHTML = rNum();
    console.log(rnum);
}

let reset = () => {
    visor.innerHTML = 0;
}

let diminuir = () => {
    // init random number 0 - 100
    let numVisor = Number.parseInt(visor.innerHTML);
    visor.innerHTML = --numVisor;
}

let aumentar = () => {
    // init random number 0 - 100
    let numVisor = Number.parseInt(visor.innerHTML);
    visor.innerHTML = ++numVisor;
}

let main = () => {
    start();
}

main();
 
// let pipoca1 = 10;
// let pipoca2 = 56;

// if (pipoca1 > pipoca2) {
//     console.log(pipoca1 + "é maior");
// } else{
//     console.log(pipoca2 + " é maior");
// }