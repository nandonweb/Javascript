// Express Viewes
const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({ extended: true}))

app.set('viewes', path.resolve(__dirname, 'src', 'viewes'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando');
});


