exports.paginaInicial = (req, res)  => {
    res.render('index');
}

exports.post = (req, res) => {
    res.send('Ola, está é a rota de POST');
}