const num1 = Number(prompt('Digite um numero:'));

const numeroTitulo = document.getElementById('numero');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(num1)}</p>`;
texto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`;
texto.innerHTML += `<p>Arredondar para baixo: ${Math.floor(num1)}</p>`;
texto.innerHTML += `<p>Arredondar para cima: ${Math.ceil(num1)}</p>`;
texto.innerHTML += `<p>Duas casas decimais: ${num1.toFixed(2)}</p>`;