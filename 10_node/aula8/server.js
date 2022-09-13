// express = CRUD 
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idade: <input type="text" name="idade">
    <button>Enviar</button>    
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
  res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`o que voce me enviou foi: ${req.body.nome}`)
});

app.get('/contato', (req, res) => {
    res.send('<b>Obrigado por entrar em contato.</b>');
});



app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando');
});


