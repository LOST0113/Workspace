let myNuns = [17, 43, 8, 4, 97, 56, 29];

function myFunc(num) {
    if(num % 2 == 0) {
        console.log(`${num} é Par`);
    } else {
        console.log(`${num} é Impar`);
    }
}

myNuns.forEach(myFunc);

let myNuns1 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

myNum1Filter = myNuns1.filter((num) => {
    return num >= 20 && num <= 80;
});

console.log(myNum1Filter);