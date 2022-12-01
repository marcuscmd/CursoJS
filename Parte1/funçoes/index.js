function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}

saudacao("Marcus"); //chamar função

function soma(x, y) {
    const result = x + y;
    return result;
}

console.log(soma(5,3));

// arrow function

const raiz = n => n ** 0.5;

console.log(raiz(9));