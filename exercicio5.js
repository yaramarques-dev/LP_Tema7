const calculaFatorial = function(n) {
    if (n === 0) return 1; 
    return n * calculaFatorial(n - 1); 
};

let resultado = calculaFatorial(5); 
console.log(resultado);