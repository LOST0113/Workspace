let celular = {
    marca: "Apple", 
    modelo: "Iphone 15 Pro Max",
    cor: "Rosa",
    memoria: "512gb",
    memoriaRam: "16gb"
}

class classCelular{
    constructor(marca, modelo, cor, memoria, memoriaRam) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.memoria = memoria;
        this.memoriaRam = memoriaRam;
        this.isDesligado = true;
    }

    ligar() {
        console.log("Ligando o celular...");
    }

    desligar() {
        if(this.isDesligado) {
            return "Desligando...";
        } else {
            return "Não vou desligar seu banana, catapimbas";
        }
    }

    pesquisa() {
        console.log("Pesquisando...");
    } 

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getCor() {
        return this.cor;
    }

    getMemoria() {
        return this.memoria;
    }

    getMemoriaRam() {
        return this.memoriaRam;
    }

    getAll() {
        let varPropDev = [];
        varPropDev.push(this.getMarca());
        varPropDev.push(this.getModelo());
        varPropDev.push(this.getCor());
        varPropDev.push(this.getMemoria());
        varPropDev.push(this.getMemoriaRam());
        return varPropDev;
    }

    printAll() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nCor: ${this.cor}\nMemória: ${this.memoria}\nMemória Ram: ${this.memoriaRam}\n`);
    }
}

let myCelular = new classCelular("Motorola", "Moto G22", "Indigo", "128gb", "4gb");
console.log(myCelular.getModelo());
console.log(myCelular.getAll());
myCelular.printAll();
console.log(myCelular.desligar());