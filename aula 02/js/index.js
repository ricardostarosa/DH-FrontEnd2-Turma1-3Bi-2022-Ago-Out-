function mostraMenu() {
  console.log(`Escolha: Pedra, Papel ou Tesoura.`);
  console.log(`================================= \n`);
}

function processaOpcao(jogador) {
  mostraMenu();

  const tipoDaOpcao = prompt(jogador).toLowerCase().trim();

  switch (tipoDaOpcao) {
    case "pedra":
      return 0;

    case "papel":
      return 1;

    case "tesoura":
      return 2;
  }
}

let empate = 0;
let numeroVitoriasA = 0;
let numeroVitoriasB = 0;
let vencedor = "";

do {
  const jogadorA = processaOpcao("jogadorA:");
  console.log(`---------------------- \n`);
  const jogadorB = processaOpcao("jogadorB:");
  console.log(`---------------------- \n`);

  if (jogadorA === jogadorB) empate++;
  else if (jogadorA - jogadorB == -2 || jogadorA - jogadorB == 1)
    numeroVitoriasA++;
  else numeroVitoriasB++;

  if (numeroVitoriasA === 2 && numeroVitoriasB < 2) vencedor = "A";
  if (numeroVitoriasB === 2 && numeroVitoriasA < 2) vencedor = "B";
} while (vencedor === "");

alert(`O vencedor é: ${vencedor}`);
console.log(`O vencedor é: ${vencedor}`);
