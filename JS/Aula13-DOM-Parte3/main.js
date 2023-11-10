let pipopa = document.querySelectorAll("p");

let i = 0;
while(i < pipopa.length) {
    pipopa[i].style.fontSize = "17px";
    pipopa[i].style.fontWeight = "bold";
    pipopa[i].style.color = "#7A04CF";
    i++;
}

let exemplo1 = document.querySelector(".exemplo1");

exemplo1.innerHTML = "Foi alterado aqui o texto com as lágrimas dos alunos";
exemplo1.style.color = "#1602ED";

function printName() {
    let inputName = prompt("Insira seu nome");
    let objMostrarNome = document.querySelector("#mostrarNome");
    objMostrarNome.innerHTML = inputName;
}

let Name = () => {
    let inputVal = document.querySelector("#inputNameArea").value;
    let mostrarNome = document.querySelector("#mostrarNome");
    mostrarNome.style.backgroundColor = "#FFF"
    mostrarNome.innerHTML = `Olá ${inputVal}, bem vindo à nossa academia.`
}

let exemplo2 = document.querySelector("#exemplo2").style.color = "#d9ff00";

let botao = document.getElementById("botao");
let inputNameArea = document.getElementById("inputNameArea");

botao.addEventListener("click", Name);
inputNameArea.addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        Name();
    }
});

document.body.style.backgroundColor = "#000"
console.log(pipopa);