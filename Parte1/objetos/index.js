//const pessoa1 = {
//    nome: 'Marcus',
//    sobrenome: 'Carvalho',
//    idade: 21
//};

//console.log(pessoa1.idade);

function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pesso1 = criaPessoa('Marcus', 'Carvalho', '21');
console.log(pesso1.nome, pesso1.sobrenome);