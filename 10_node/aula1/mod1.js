const nome = 'Fernando';
const sobrenome = 'Silva'

const falaNome = () => {
    console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'o que eu quiser exporta';

console.log(module.exports);