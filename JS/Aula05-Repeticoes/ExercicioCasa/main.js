let resol = (a, b) => {
    c = a * b;
    console.log(`${a} x ${b} = ${c}`)
}

let tabuada = (n) => {
    console.log(`Tábuada do ${n}`);
    for(let i = 0; i < 11; i++){
        resol(n, i);
    }
}

tabuada(8)