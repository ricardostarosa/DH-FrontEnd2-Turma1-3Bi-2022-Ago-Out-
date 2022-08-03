// Autores:

// Diego Amorim

// Filipe Rodrigues

// Leonardo Araújo

// João Guimarães

// Jonathan Santos

// Ricardo Silva

function mostraMenu() {
  alert(`Escolha: Pedra, Papel ou Tesoura.`);
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let empate = 0;
let numeroVitoriasA = 0;
let numeroVitoriasB = 0;
let vencedor = "";

do {
  const jogadorA = processaOpcao("Jogador:");
  console.log(`---------------------- \n`);
  const jogadorB = getRandomInt(0, 3);
  console.log(`---------------------- \n`);

  if (jogadorA === jogadorB) empate++;
  else if (jogadorA - jogadorB == -2 || jogadorA - jogadorB == 1)
    numeroVitoriasA++;
  else numeroVitoriasB++;

  if (numeroVitoriasA === 2 && numeroVitoriasB < 2) vencedor = "A";
  if (numeroVitoriasB === 2 && numeroVitoriasA < 2) vencedor = "B";

  if (numeroVitoriasA === 2 || numeroVitoriasB === 2) break;
  alert(`O resultado parcial é: ${numeroVitoriasA} X ${numeroVitoriasB}`);
} while (vencedor === "");

alert(`O vencedor é: ${vencedor}`);
console.log(`O vencedor é: ${vencedor}`);
