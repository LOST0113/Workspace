let botao = document.getElementById("B_01");
body = document.body;

botao.style.border = "solid 2px #D9BC66";
botao.style.margin = ".5rem";
botao.style.backgroundColor = "#BFBFBF";
botao.style.padding = ".7rem";
botao.style.cursor = "pointer";

botao.addEventListener("click", () => {
    let imagem = document.createElement("img");
    imagem.src = "IMG/the-umbrella-1-550x298.jpg";
    imagem.alt = "The Umbrella Academy";
    body.appendChild(imagem);
});

let printTabuada = () => {
    let promptValue = Number.parseInt(prompt("Insira o número da tábuada"));
    let mySpan = document.createElement("span");
    for (let i = 1; i < 11; i++) {
        mySpan.innerHTML += `${i} x ${promptValue} = ${promptValue * i} <br>`;
    }
    
    body.appendChild(mySpan);
}
