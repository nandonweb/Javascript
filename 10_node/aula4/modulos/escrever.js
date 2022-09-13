const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'});
}


// fs.writeFile(caminhoArquivo, json, {flag: 'a'}); - Não apaga os dados do arquivo