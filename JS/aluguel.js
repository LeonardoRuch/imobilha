const items = [{
    id: 0,
    nome: 'Casa Alto Padrão',
    img: '<img src="IMGs/casasimples.jpg" alt="Erro" id="img_K1">',
    preco: 'Mensal: $1.500'
}, {
    id: 1,
    nome: 'Apartamento',
    img: '<img src="IMGs/apartamentopadrao.jpg" alt="Erro" id="img_K1">',
    preco: 'Mensal: $1.200'
}, {
    id: 2,
    nome: 'Kitnet',
    img: '<img src="IMGs/kitnetPa.jpg" alt="Erro" id="img_K1">',
    preco: 'Mensal: $900'
}]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
        <div class ="produto-single">

            <img src"` + val.img + `
            <p>` + val.nome + `</p>
            <p>` + val.preco + `</p>


        </div>
     `;
    })
}
inicializarLoja();

function voltar() {
    {
        window.location.href = "menu.html"
    }
}