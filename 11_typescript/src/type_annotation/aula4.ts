// Tipo object

const objetosA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetosA.chaveA = 'Outro valor';
objetosA.chaveC = 'Nova chave';
objetosA.chaveD = 'Nova chave';

console.log(objetosA);
