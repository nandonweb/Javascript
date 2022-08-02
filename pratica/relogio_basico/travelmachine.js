function atualizarHora () {
    const h1 = document.querySelector('.conteudo h1');
    const h2 = document.querySelector('.conteudo h2');
    const h3 = document.querySelector('.conteudo h3');
    const hora = new Date();
    // Distancia de datas - Min 01/01/100, Max 31/12/275759
    const hora2 = new Date(1970, 0, 1);
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

      h1.innerHTML = hora2.toLocaleDateString('pt-BR', opcoes);
      h2.innerHTML = (`${hour}:${min}:${seg}:${mili}`) ;
      h3.innerHTML = (`${calc1}`);
    }

    setInterval(atualizarHora, 1000);
    
    