let randomn = () => {
    return Math.floor(Math.random() * 100);
}

let num1 = randomn();
let num2 = randomn();

console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);

if(num1 > num2) {
    console.log("num1 é maior que num2");
} else{
    console.log("num1 é menor que num2");
}