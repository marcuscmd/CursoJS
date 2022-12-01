const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemana(diadaSemana){
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
        'Sexta-feira', 'Sabado'];
    return diaSemana[diadaSemana];
}

function getNomeMes(numeroMes){
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mes[numeroMes];
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const diaNome = getDiaSemana(diaSemana);
    const mesNome = getNomeMes(numeroMes);

    return (`${diaNome}, ${data.getDate()} de ${mesNome}` + 
            `de ${data.getFullYear()} ` + `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);