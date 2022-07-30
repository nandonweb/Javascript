function dados () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  // Printa / Não envia os dados e mostra o array
  // let contador = 1;
  // function recebeEventoForm (evento) {
  //   evento.preventDefault();
  //   console.log(`Não Enviado ${contador}`);
  //   contador++;
  // };

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    
    console.log(pessoas);
  }

  form.addEventListener('submit', recebeEventoForm);
   
  //RESULTADO 

  resultado.innerHTML += `Seu Nome é ${nome.value}`;
  resultado.innerHTML += `Seu Sobrenome é ${sobrenome.value}`;
  resultado.innerHTML += `Seu Peso é ${peso.value}`;
  resultado.innerHTML += `Sua Altura é ${altura.value}`;

}

// ARRAY
dados();