// Objeto Date
// const d3horas = 60 * 60 * 3 * 1000;
// const d24Horas = 60 * 60 * 24 * 1000;
// const d30dias = d24Horas * 30;
// const d1ano = d30dias * 12;
// const data = new Date(d3horas); // 01/01/1970 Timestamp unix ou epoca unix
// const data = new Date(2022, 1, 1, 15, 20) / a, m, d, h, M, s, ms
const data = new Date('2022-08-01 20:59:59');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // Mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMinutes());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sabado

console.log(data.toString());
console.log(Date.now()) // Milesegundos desde 01/01/1970 
