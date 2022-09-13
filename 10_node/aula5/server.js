// express = CRUD 
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>    
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});

app.get('/contato', (req, res) => {
    res.send('<b>Obrigado por entrar em contato.</b>');
});



app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor em execução');
});


