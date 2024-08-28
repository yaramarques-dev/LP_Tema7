function Estudante(nome, notas) {
    this.nome = nome;
    this.notas = notas;

    this.calcularMedia = function() {
        if (this.notas.length === 0) return 0;

        let soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    };
}

let meuEstudante = new Estudante("Ana", [7.5, 8.0, 9.0]);
console.log(meuEstudante.calcularMedia());