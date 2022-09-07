const verdadeira = true;

// Let tem escopo de bloco
// Var só tem escopo de função

function falaOi () {
  var sobrenome = 'Silva';

  if (verdadeira) {
   let nome = 'Fernando';
   console.log(nome, sobrenome);
  }


}

falaOi()