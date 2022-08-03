const numeros = [1, 2, 4, 8];
let soma = 0;

for (let numero of numeros) {
  console.log(`A soma parcial de: ${soma} + ${numero} = ${soma + numero} `);
  soma += numero;
}

console.log(`A soma total é: ${soma}`);
