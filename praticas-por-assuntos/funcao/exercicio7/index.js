function adicionarItem(frutas, item) {
  frutas.push(item);
  return frutas;
}

let frutas = ["maçã", "banana"];
console.log(frutas);

adicionarItem(frutas, "laranja");

console.log(frutas);
