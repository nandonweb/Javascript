// Funções recursivas
// Ela retorna ela mesma
// tem um limite bloqueado pelo proprio JS

function recursiva(max) {
    if (max >= 10000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-1);