let saldo = 1000; // saldo inicial
let opcao;

do {
  opcao = prompt(
    "=== MENU BANCÁRIO ===\n" +
    "1 - Consultar saldo\n" +
    "2 - Crédito (depositar)\n" +
    "3 - Débito (sacar)\n" +
    "4 - Sair\n\n" +
    "Digite a opção desejada:"
  );

  switch (opcao) {
    case "1":
      alert("Seu saldo atual é: R$ " + saldo.toFixed(2));
      break;

    case "2":
      let credito = Number(prompt("Digite o valor do crédito:"));
      if (!isNaN(credito) && credito > 0) {
        saldo += credito;
        alert("Crédito realizado! Saldo atual: R$ " + saldo.toFixed(2));
      } else {
        alert("Valor inválido.");
      }
      break;

    case "3":
      let debito = Number(prompt("Digite o valor do débito:"));
      if (!isNaN(debito) && debito > 0) {
        if (debito <= saldo) {
          saldo -= debito;
          alert("Débito realizado! Saldo atual: R$ " + saldo.toFixed(2));
        } else {
          alert("Saldo insuficiente!");
        }
      } else {
        alert("Valor inválido.");
      }
      break;

    case "4":
      alert("Saindo... Obrigado por usar nosso sistema!");
      break;

    default:
      alert("Opção inválida. Tente novamente.");
  }

} while (opcao !== "4");
