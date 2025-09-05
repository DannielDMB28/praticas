const pessoa = {
    nome: "Daniel",
    idade: "21 anos",
    cidade: "Vera Cruz"
}

function usuario(apresentaçao) {
    console.log(`Ola me chamo ${pessoa.nome}, tenho ${pessoa.idade} e moro na cidade de ${pessoa.cidade}`)
};

usuario(pessoa);