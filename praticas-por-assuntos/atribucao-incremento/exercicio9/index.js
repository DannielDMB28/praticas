// Saldo inicial
let saldo = 1000;
console.log("Saldo inicial:", saldo);

// Crédito de 500
saldo += 500;  // equivale a saldo = saldo + 500
console.log("Após crédito de 500:", saldo);

// Débito de 200
saldo -= 200;  // equivale a saldo = saldo - 200
console.log("Após débito de 200:", saldo);

// Aplicar rendimento (10%)
saldo *= 1.10;  // equivale a saldo = saldo * 1.10
console.log("Após rendimento de 10%:", saldo);

// Taxa de serviço (dividindo saldo por 2 para simular desconto pesado 😅)
saldo /= 2;  // equivale a saldo = saldo / 2
console.log("Após taxa de serviço (50%):", saldo);
