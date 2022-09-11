// Validar CPF
// codigo imcompleto

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
        return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
   if(typeof cpfLimpo === 'undefined') return false;
   if(this.cpfLimpo.length !== 11) return false;

   const cofParcial = this.cpfLimpo.slice(0, -2);
   const digito1 = this.criaDigito(cpfParcial);

   return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
    console.log(digito);
};

const cpf = new ValidaCPF('123.456.754.15');
console.log(cpf.valida());