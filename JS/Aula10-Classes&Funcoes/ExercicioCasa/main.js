class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    
    contaPoupanca() {
        let taxaPoupança = 0.015;
        return this.salario * (1 - taxaPoupança);
    }
    
    contaCorrente() {
        let taxaCorrente = 0.036;
        return this.salario * (1 - taxaCorrente);
    }
    
    contaEstudante() {
        let taxaEstudante = 0.012;
        return this.salario * (1 - taxaEstudante);
    }
}

let conta1 = new contaBancaria("Aluna 1", 20, 1000, "Feminino", "Agencia 1", "Conta 1", "Poupança");
let conta2 = new contaBancaria("Aluna 2", 22, 1500, "Masculino", "Agencia 2", "Conta 2", "Corrente");
let conta3 = new contaBancaria("Aluna 3", 25, 1200, "Feminino", "Agencia 3", "Conta 3", "Estudante");

// Imprimindo informações no console
console.log("Informações da Aluna 1:");
console.log("Nome:", conta1.nome);
console.log("Idade:", conta1.idade);
console.log("Sexo:", conta1.sexo);
console.log("Agência:", conta1.agencia);
console.log("Conta:", conta1.conta);
console.log("Tipo de Conta:", conta1.tipoConta);
console.log("Novo salário com desconto:", conta1.contaPoupanca());

console.log("\nInformações da Aluna 2:");
console.log("Nome:", conta2.nome);
console.log("Idade:", conta2.idade);
console.log("Sexo:", conta2.sexo);
console.log("Agência:", conta2.agencia);
console.log("Conta:", conta2.conta);
console.log("Tipo de Conta:", conta2.tipoConta);
console.log("Novo salário com desconto:", conta2.contaCorrente());

console.log("\nInformações da Aluna 3:");
console.log("Nome:", conta3.nome);
console.log("Idade:", conta3.idade);
console.log("Sexo:", conta3.sexo);
console.log("Agência:", conta3.agencia);
console.log("Conta:", conta3.conta);
console.log("Tipo de Conta:", conta3.tipoConta);
console.log("Novo salário com desconto:", conta3.contaEstudante());