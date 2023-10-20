var texto1 = "Texto bem aleatório dos atrasados da volta da pausa";

var texto2 = "Texto bem aleatório dos atrasados da volta da pausa";

// console.log(texto1 + " " + "A vida é um sapinho dando pulinho na lagoa" + " " + texto2);

// console.log(`${texto1} A vida é um sapinho dando pulinho na lagoa ${texto2}`);

// Métodos de string
console.clear();

// Definindo string string01
const string01 = "Instituto da Oportunidade Social";

// Printar string string01
console.log(string01);

// Printar o caráctere a partir do index dele
console.log(`posição 10 ${string01.charAt(10)}`);

// Printar o caráctere a partir do index dele
console.log(`posição 11 ${string01.charAt(11)}`);

// Printar quantidade de carácteres disponivel em uma string
console.log(string01.length);

const string03 = "Instituto da oportunidade Social";

const string04 = "INSTITUTO DA OPORTUNIDADE SOCIAL";

// if (string03.toLocaleLowerCase() == string04.toLowerCase()) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// Substituir string
console.clear();
let mensagem = "Venha para a Microsoft!";
console.log(mensagem);

let novaMensagem = mensagem.replace("Microsoft", "IOS");
console.log(novaMensagem);

let trocaTexto = "Bem vindo ao jogo, Roblox"

let textoTrocado = trocaTexto.replace("Roblox", "Klebinho Jogador");

console.log(`Texto original : ${trocaTexto}`);
console.log(`Texto Trocado : ${textoTrocado}`);