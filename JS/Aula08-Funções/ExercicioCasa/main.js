function alertCookie() {
    alert("Você quer um cookie?");
    console.log("Você quer um cookie?");
}

let alertSucesso = () => {
    alert("Mensagem gerada com sucesso");
    console.log("Mensagem gerada com sucesso");
}

let notebook = {
    sistemaOperacional: "Windows",
    marca: "Samsung",
    cor: "preto",
    memoria: "256G",
    memoriaRam: "4G"
}

console.log(notebook);

let yearsToDays = (numYears) => {
    console.log(`${numYears} anos tem ${numYears * 365} dias`);
}

for (let i = 1; i < 6; i++) {
    yearsToDays(i);
}