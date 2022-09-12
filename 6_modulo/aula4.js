// Metodos de instancia e estaticos

class ConstroleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de instancia
    aumentaVolume() {
     this.volume += 2;
    }
    diminuirVolume() {
     this.volume -= 2;
    }

    // Metodo estatico
    static trocaPilha() {
      console.log("ok, vou trocar.");
    }
}

const controle = new ConstroleRemoto('LG');
controle.aumentaVolume();
controle.aumentaVolume();
console.log(controle);

ConstroleRemoto.trocaPilha();