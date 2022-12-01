const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResult('Peso Invalido', false);
        return;
    }
    if(!altura){
        setResult('Altura Invalido', false);
        return;
    }
    
    const imc = getImc(peso, altura);

    if (imc < 18.5){
        setResult(`Seu imc é ${imc.toFixed(2)} (Abaixo do peso)`, true);
        return;
    }
    else if (imc >= 18.5 && imc <= 24.9){
        setResult(`Seu imc é ${imc.toFixed(2)} (Peso normal)`, true);
        return;
    }
    else if (imc > 24.9 && imc <= 29.9){
        setResult(`Seu imc é ${imc.toFixed(2)} (Sobrepeso)`, true);
        return;
    }
    else if (imc > 29.9 && imc <= 34.9){
        setResult(`Seu imc é ${imc.toFixed(2)} (Obesidade 1)`, true);
        return;
    }
    else if (imc > 34.9 && imc <= 39.9){
        setResult(`Seu imc é ${imc.toFixed(2)} (Obesidade 2)`, true);
        return;
    }
    else if (imc >= 40){
        setResult(`Seu imc é ${imc.toFixed(2)} (Obesidade 3)`, true);
        return;
    }

});

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc;
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = criaP();
    if(!isValid){
        p.classList.add('paragrafo-falso');
    }
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }
    p.innerHTML = msg;
    result.appendChild(p);
    
}