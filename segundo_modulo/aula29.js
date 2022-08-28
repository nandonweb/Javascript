try {
 // é executada quando não há erros
 console.log(a);
 console.log('Abri um arquivo');
 console.log('Manipulei o arquivo e gerou erro');
 console.log('Fechei o arquivo');
} catch (e) {
 // é executado quando há erros
 console.log('Tratando o erro');
} finally {
    console.log('Finally: Eu sempre sou executado');
    // Sempre
}