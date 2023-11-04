function addNums(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2;
}

function func(num1, num2) {
    return num1 * num2;
}

let hi = (num) => {
    if (num) {
        return `Hello World ${num}`;
    }
    else {
        return "Hello World";
    }
}

for (let i = 0; i < 11; i++) {
    console.log(hi(i));
}