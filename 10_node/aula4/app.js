// Escrver e ler arquivos com FS

const path = require("path");
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

// Escreve o arquivo

// const pessoas = [
//     { nome: 'Joao', idade: 59},
//     { nome: 'Maria', idade: 28},
//     { nome: 'Pedro', idade: 40},
//     { nome: 'Luiza', idade: 39}
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

// Ler o arquivo 

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderiza(dados);
}

function renderiza(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);


// const dadosArquivo = leArquivo(caminhoArquivo)
// .then(dados => console.log(dados));
