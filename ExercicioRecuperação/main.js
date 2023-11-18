let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySpan = document.getElementById("mySpan");

let verificarMes = () => {
    switch (myInput.value) {
        case "1":
            mySpan.innerHTML = "Você escreveu o mês 1 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 1 e a estação desse mês é Verão 🌞");
            break;
        
        case "01":
            mySpan.innerHTML = "Você escreveu o mês 01 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 01 e a estação desse mês é Verão 🌞");
            break;
        
        case "2":
            mySpan.innerHTML = "Você escreveu o mês 2 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 2 e a estação desse mês é Verão 🌞");
            break;

        case "02":
            mySpan.innerHTML = "Você escreveu o mês 02 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 02 e a estação desse mês é Verão 🌞");
            break;

        case "3":
            mySpan.innerHTML = "Você escreveu o mês 3 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 3 e a estação desse mês é Verão 🌞");
            break;

        case "03":
            mySpan.innerHTML = "Você escreveu o mês 03 e a estação desse mês é Verão 🌞";
            console.log("Você escreveu o mês 03 e a estação desse mês é Verão 🌞");
            break;

        case "4":
            mySpan.innerHTML = "Você escreveu o mês 4 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 4 e a estação desse mês é Outono 🍁");
            break;

        case "04":
            mySpan.innerHTML = "Você escreveu o mês 04 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 04 e a estação desse mês é Outono 🍁");
            break;

        case "5":
            mySpan.innerHTML = "Você escreveu o mês 5 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 5 e a estação desse mês é Outono 🍁");
            break;

        case "05":
            mySpan.innerHTML = "Você escreveu o mês 05 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 05 e a estação desse mês é Outono 🍁");
            break;

        case "6":
            mySpan.innerHTML = "Você escreveu o mês 6 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 6 e a estação desse mês é Outono 🍁");
            break;

        case "06":
            mySpan.innerHTML = "Você escreveu o mês 06 e a estação desse mês é Outono 🍁";
            console.log("Você escreveu o mês 06 e a estação desse mês é Outono 🍁");
            break;

        case "7":
            mySpan.innerHTML = "Você escreveu o mês 7 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 7 e a estação desse mês é Inverno ⛄");
            break;

        case "07":
            mySpan.innerHTML = "Você escreveu o mês 07 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 07 e a estação desse mês é Inverno ⛄");
            break;

        case "8":
            mySpan.innerHTML = "Você escreveu o mês 8 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 8 e a estação desse mês é Inverno ⛄");
            break;

        case "08":
            mySpan.innerHTML = "Você escreveu o mês 08 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 08 e a estação desse mês é Inverno ⛄");
            break;

        case "9":
            mySpan.innerHTML = "Você escreveu o mês 9 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 9 e a estação desse mês é Inverno ⛄");
            break;

        case "09":
            mySpan.innerHTML = "Você escreveu o mês 09 e a estação desse mês é Inverno ⛄";
            console.log("Você escreveu o mês 09 e a estação desse mês é Inverno ⛄");
            break;

        case "10":
            mySpan.innerHTML = "Você escreveu o mês 10 e a estação desse mês é Primavera 🌷";
            console.log("Você escreveu o mês 10 e a estação desse mês é Primavera 🌷");
            break;

        case "11":
            mySpan.innerHTML = "Você escreveu o mês 11 e a estação desse mês é Primavera 🌷";
            console.log("Você escreveu o mês 11 e a estação desse mês é Primavera 🌷");
            break;

        case "12":
            mySpan.innerHTML = "Você escreveu o mês 12 e a estação desse mês é Primavera 🌷";
            console.log("Você escreveu o mês 12 e a estação desse mês é Primavera 🌷");
            break;

        default:
            mySpan.innerHTML = "Você não digitou o mês";
            console.log("Você não digitou o mês");
            break;
    }
}


myButton.addEventListener("click", verificarMes);
myInput.addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        verificarMes();
    }
});