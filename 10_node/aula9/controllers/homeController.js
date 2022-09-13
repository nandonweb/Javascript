exports.paginaInicial = (req, res)  => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idade: <input type="text" name="idade">
    <button>Enviar</button>    
    </form>
    `);
}

exports.post = (req, res) => {
    res.send('Ola, está é a rota de POST');
}