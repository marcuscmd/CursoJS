const elementos = [
    {tag: 'p', texto: 'Um texto da tag p'},
    {tag: 'div', texto: 'Um texto da tag div'},
    {tag: 'footer', texto: 'Um texo da tag footer'},
    {tag: 'section', texto: 'Um texo da tag section'},
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i];  // desestruturação
    let tagCriada = document.createElement(tag); // cria o elemento na pagina "tag "
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);