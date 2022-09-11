// Herança

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
}

ligar() {
    if(this.ligado) {
        console.log(this.nome + ' ja ligado');
        return;
    }

    this.ligado = true;
}

desligar() {
    if(this.ligado) {
        console.log(this.nome + ' desligado');
        return;
} 

     this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new DispositivoEletronico('Samsung', 'Preto', 'Galaxy S22');
console.log(s1);