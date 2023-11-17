let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySpan = document.getElementById("mySpan");

let myFunc = () => {
    let valor = Number.parseInt(myInput.value);
    let aumento = 0.17;
    let novoValor = valor + (valor * aumento) + 215;
    mySpan.innerHTML = novoValor;
    console.log(novoValor);
}

myButton.addEventListener("click", myFunc);
myInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        myFunc();
    }
});