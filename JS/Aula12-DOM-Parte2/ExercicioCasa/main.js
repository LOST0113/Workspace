let botao = document.getElementById("B_01");

botao.style.border = "solid 2px #D9BC66";
botao.style.margin = ".5rem";
botao.style.backgroundColor = "#BFBFBF";
botao.style.padding = ".7rem";
botao.style.cursor = "pointer";

botao.addEventListener("click", () => {
    let imagem = document.createElement("img");
    imagem.src = "IMG/the-umbrella-1-550x298.jpg";
    imagem.alt = "The Umbrella Academy";
    document.body.appendChild(imagem);
});