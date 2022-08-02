function atualizarHora() {
    const h1 = document.querySelector('.conteudo h1');
    const h2 = document.querySelector('.conteudo h2');
    const hora = new Date();
    const hour = hora.getHours();
    const min = hora.getMinutes();
    const seg = hora.getSeconds();
    const mili = hora.getMilliseconds();

    const opcoes = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric',
    }

    h1.innerHTML = hora.toLocaleDateString('pt-BR', opcoes);
    h2.innerHTML = (`${hour}:${min}:${seg}:${mili}`);
}

setInterval(atualizarHora, 120);