// express = CRUD 
const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true}))
app.use(routes);


// app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//   res.send(req.params.idUsuarios);
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send(`o que voce me enviou foi: ${req.body.nome}`)
// });

// app.get('/contato', (req, res) => {
//     res.send('<b>Obrigado por entrar em contato.</b>');
// });



app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando');
});


