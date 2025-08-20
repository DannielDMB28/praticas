function sortearNumero() {
  // Math.random() gera número entre 0 (inclusive) e 1 (exclusive)
  // Multiplicamos por 10 para ter 0 a 9.999..., somamos 1 para 1 a 10.999...
  // Math.floor arredonda para baixo, resultando em 1 a 10
  return Math.floor(Math.random() * 10);
}

// Exemplo de uso:
const numeroSorteado = sortearNumero();
console.log("Número sorteado:", numeroSorteado);
