const items = [{
        id: 0,
        nome: 'Casa Alto Padrão',
        img: '<img src="IMGs/casa.jpg" alt="Erro" id="img_K1">',
        preco: '$2.500.000'
    },
    {
        id: 1,
        nome: 'Apartamento',
        img: '<img src="IMGs/ap.jpg" alt="Erro" id="img_K1">',
        preco: '$1.500.000'
    },
    {
        id: 2,
        nome: 'Kitnet',
        img: '<img src="IMGs/kitnet.jpg" alt="Erro" id="img_K1">',
        preco: '$500.000'
    }
]

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