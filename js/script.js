const faqQuestions = document.querySelector(".faq-content-header");
const faqAnswer = document.querySelector(".faq-content-body");
const btnPlus = document.querySelector(".plus-btn");
const btnMinus = document.querySelector(".minus-btn");

faqQuestions.addEventListener("click", (event) => {
  console.log("click");
  event.stopPropagation(); // 🛑 Prevents event from reaching parent
  faqAnswer.classList.toggle("hide");
  btnMinus.classList.toggle("hide");
  btnPlus.classList.toggle("hide");
});
