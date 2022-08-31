import { validaNome, validaEmail, validaTermo } from "./validacoes.js";

const id = document.getElementById.bind(document);

const botao = id("salvar");

const nome = id("nome");
const altura = id("altura");
const idade = id("idade");
const email = id("email");
const listaItens = id("listaItens");
const termo = id("checkbox");

const nomeValidacao = id("nomeValidacao");
const emailValidacao = id("emailValidacao");
const termoValidacao = id("termoValidacao");

//colocar um listener para cara campo com o evento de monitoramento e salvar se os itens obrigatorios foram preenchidos

const listaValidacaoCampos = [false, false, false];

nome.addEventListener("keyup", () => {
  if (validaNome(nome.value)) {
    nome.style.backgroundColor = "green";
    nomeValidacao.textContent = "";

    listaValidacaoCampos[0] = true;
  } else {
    nome.style.backgroundColor = "coral";

    listaValidacaoCampos[0] = false;
  }

  if (listaValidacaoCampos.every((item) => item))
    botao.removeAttribute("disabled");
  else botao.setAttribute("disabled", "disabled");
});

nome.addEventListener("blur", () => {
  if (validaNome(nome.value) || nome.value === "") {
    nome.style.backgroundColor = "white";
    nomeValidacao.textContent = "";
  } else {
    nomeValidacao.textContent = "O nome precisa ter entre 6 a 20 caracteres!";
    nomeValidacao.classList.add("smallInvalido");
  }
  if (listaValidacaoCampos.every((item) => item))
    botao.removeAttribute("disabled");
  else botao.setAttribute("disabled", "disabled");
});

email.addEventListener("keyup", () => {
  if (validaEmail(email.value)) {
    email.style.backgroundColor = "green";
    emailValidacao.textContent = "";

    listaValidacaoCampos[1] = true;
  } else {
    email.style.backgroundColor = "coral";

    listaValidacaoCampos[1] = false;
  }

  if (listaValidacaoCampos.every((item) => item))
    botao.removeAttribute("disabled");
  else botao.setAttribute("disabled", "disabled");
});

email.addEventListener("blur", () => {
  if (validaEmail(email.value) || email.value === "") {
    email.style.backgroundColor = "white";
    emailValidacao.textContent = "";
  } else {
    emailValidacao.textContent = "O email está fora de formato!";
    emailValidacao.classList.add("smallInvalido");
  }

  if (listaValidacaoCampos.every((item) => item))
    botao.removeAttribute("disabled");
  else botao.setAttribute("disabled", "disabled");

  console.log("email", listaValidacaoCampos);
});

termo.addEventListener("click", () => {
  if (validaTermo(termo.checked)) {
    listaValidacaoCampos[2] = true;
  } else {
    listaValidacaoCampos[2] = false;
    botao.setAttribute("disabled", "disabled");
    termoValidacao.textContent = "Precisa selecionar o termo!";
  }

  if (listaValidacaoCampos.every((item) => item))
    botao.removeAttribute("disabled");
  else botao.setAttribute("disabled", "disabled");

  console.log("nome", listaValidacaoCampos);
});
