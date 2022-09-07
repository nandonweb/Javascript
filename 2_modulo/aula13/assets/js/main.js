// // Seleciona o elemento h1 dentro da class container
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// // Função que lista os dias da semana
// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// // Função que lista os meses do ano
// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// }

// // Coloca um zero antes do numero atual
// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`;
// }

// // Cria a Data Atual
// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// // Mostra o Resultado na Pagina
// h1.innerHTML = criaData(data);

// Termos usados = QuerySelector, Função, Array, ternica, objeto date, innerHTML.


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });