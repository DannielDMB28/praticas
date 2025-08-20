let nome = prompt('Digite seu nome: ');

alert(`Ola ${nome}, vamos ao menu do cardapio!`);

let menu = prompt('prato 1: Lasanha, \nprato 2: Pizza \nprato 3: Hamburguer');


if (menu === 'prato 1') {
   alert(`Uma Otima escolha! A lasanha custa: 30 R$`);
} else if (menu === 'prato 2') {
    alert(`Escolheu muito bem! A pizza fica no valor de 50 R$`);
} else if (menu === 'prato 3') {
    alert(`Muito bom seu pedido! O HUmburguer custa: 36 R$`);
} else {
    "Não entendi seu pedi, tente novamente!";
}    


