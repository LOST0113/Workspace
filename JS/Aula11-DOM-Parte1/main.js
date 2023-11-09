// criação da variavel e criação do botão
let botao = document.createElement("button");
let body = document.body;
// adicionar o filho(botao) na body
document.body.appendChild(botao);

botao.innerHTML = "Acessa ai!";

let myFunc = () => {
    alert("Você clicou no botão");
}

body.style.height = "100vh"
body.style.backgroundColor = "pink";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
botao.style.backgroundColor = "aquamarine";
botao.style.border = "solid 1px aqua";
botao.style.borderRadius = "5px";
botao.style.padding = "15px 20px";
botao.style.cursor = "pointer";
botao.addEventListener("click", myFunc);