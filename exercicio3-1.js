function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    
    this.exibirInfo = function() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    };
}

let meuLivro = new Livro("1984", "George Orwell", 1949);
console.log(meuLivro.exibirInfo());