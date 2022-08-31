function validaNome(nome) {
  return nome.length >= 5 && nome.length <= 20;
}

function validaEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validaTermo(termo) {
  return termo;
}

export { validaNome, validaEmail, validaTermo };
