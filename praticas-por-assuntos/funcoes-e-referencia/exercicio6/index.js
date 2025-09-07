function propriedade(objeto, chave, valor) {
    objeto[chave] = valor;
    return objeto;
   
}

let pessoa = {
    nome: "Daniel",
    idade: "21 anos",
    cidade: "Vera Cruz"
};

console.log(pessoa);

propriedade(pessoa, "cidade", "Salvador");

console.log(pessoa);