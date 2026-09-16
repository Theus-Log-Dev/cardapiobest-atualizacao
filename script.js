let carrinho = [];
let total = 0;

function adicionarPizza(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    });

    total = total + preco;

    atualizarCarrinho();
}
function atualizarCarrinho() {

    let lista = document.getElementById("lista-carrinho");

    lista.innerHTML = "";

    carrinho.forEach(function(pizza) {

        let item = document.createElement("li");

        item.textContent = pizza.nome + " - R$ " + pizza.preco.toFixed(2);

        lista.appendChild(item);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}