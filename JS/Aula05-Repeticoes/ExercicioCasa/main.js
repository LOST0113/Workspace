let resol = (a, b) => {
    c = a * b;
    console.log(`${a} x ${b} = ${c}`)
}

let tabuada = (n) => {
    for(let i = 0; i < 11; i++){
        resol(n, i);
    }
}

let divisoria = document.getElementById("divisoria");

let principal = () => {
    divisoria.innerHTML = "<h2>Hello World!!!</h2>";
}