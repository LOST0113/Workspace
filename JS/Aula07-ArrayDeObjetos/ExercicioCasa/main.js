let arrayDeObjetosAlunos = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8,
        ano: "2°B"
    },
    {
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2°C"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2°C"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3°C"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 6,
        ano: "3°C"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1°F"
    }
]

console.log(arrayDeObjetosAlunos);
console.log(arrayDeObjetosAlunos[4]);
console.log(arrayDeObjetosAlunos[5].nota);
console.log(JSON.stringify(arrayDeObjetosAlunos));