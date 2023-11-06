let frutas = ["maçã", "laranja", "cereja"];

let stringText = "Test";

let numArray = [6, 4, 1, 2, 3, 8, 0, 9, 5, 7];

let myObjectArray = [
    { nome: "apples", quantidade: 2 },
    { nome: "bananas", quantidade: 0 },
    { nome: "cerejas", quantidade: 5 }
];

let strCapitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

let imparPar = (num) => {
    if (num % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

let boolPar = (num) => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let myFunc = (data, index) => {
    console.log(`item: ${strCapitalize(data)}, index: ${index}`);
}

frutas.forEach(myFunc);

let arrayNew = frutas.map(strCapitalize);
console.log(arrayNew);

let numArrayPar = numArray.filter(boolPar);

let arr = [];

for (let i = 1; i < 11; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

arrPar = arr.filter(boolPar);

console.log(arr);
console.log(arrPar);
console.log(numArrayPar);