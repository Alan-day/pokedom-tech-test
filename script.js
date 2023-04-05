import { pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");
const button = document.querySelector(".btn");

const handleClickFunction = (event) => {
  pokemonArray.forEach((element) => {
    container.innerHTML += `<div class = "card">
    <div class = "card__content">
   
    <img class = "card__image" src =${element.sprite}>
    <p class = "card__heading">  ${element.name}</p>
    <p class = "card__text">${element.name} is a ${element.types} pokemon </p>
    </div>
    </div> `;
  });
};

button.addEventListener("click", handleClickFunction);
