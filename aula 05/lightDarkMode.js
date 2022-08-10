const cor = "dark";

// function changeColorMode(mode) {
//   document.querySelector("body").classList.toggle(mode);

//   document.querySelector("h1").classList.toggle(mode);

//   const itens = document.querySelectorAll(".item");

//   itens.forEach((elements) => {
//     elements.classList.toggle(mode);

//     elements.childNodes[3].classList.toggle(mode);

//     elements.childNodes[5].classList.toggle(mode);
//   });
// }

// changeColorMode(cor);

function myFunction() {
  document.querySelector("body").classList.toggle("dark");

  document.querySelector("h1").classList.toggle("dark");

  const itens = document.querySelectorAll(".item");

  itens.forEach((elements) => {
    elements.classList.toggle("dark");

    elements.childNodes[3].classList.toggle("dark");

    elements.childNodes[5].classList.toggle("dark");
  });
}
