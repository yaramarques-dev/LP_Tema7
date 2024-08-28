function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;

    this.precoFinal = function() {
        return this.preco * (1 - this.desconto / 100);
    };
}

let meuProduto = new Produto("Smartphone", 1200, 15);
console.log(meuProduto.precoFinal());