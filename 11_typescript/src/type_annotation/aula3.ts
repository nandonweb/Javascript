// Tipo void

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Fernando',
  sobrenome: 'Silva',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Fernando', 'Silva');
pessoa.exibirNome();

export { pessoa };
