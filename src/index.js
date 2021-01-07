import css from "./css/styles.css";
import fetch from "./js/fetch.js";
import lib from "./js/lib.js";
import refs from "./js/refs.js";
const { form, searchButton, gallery } = refs;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.query.value;
  fetch.getFetch(inputValue, gallery);
  form.reset();
});
