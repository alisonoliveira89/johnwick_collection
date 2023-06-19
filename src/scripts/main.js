document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;
  hideHeaderElement();
  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      hideHeaderElement();
    } else {
      displayHeaderElement();
    }
  });

  // Seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openOrCloseAnswer);
  }
});

function hideHeaderElement() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function displayHeaderElement() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function openOrCloseAnswer(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}
