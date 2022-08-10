function changeColorMode() {
  document.querySelector("body").classList.toggle("dark");

  document.querySelector("h1").classList.toggle("dark");

  const itens = document.querySelectorAll(".item");

  itens.forEach((elements) => {
    elements.classList.toggle("dark");

    elements.childNodes[3].classList.toggle("dark");

    elements.childNodes[5].classList.toggle("dark");
  });
}
