import { pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");
const button = document.querySelector(".btn");

const handleClickFunction = (event) => {
  pokemonArray.forEach((element) => {
    container.innerHTML += `<div class = "card">
   ${element.id}
   <h1 = "card__heading">  ${element.name}</h1>
    ${element.types}
    <img src =${element.sprite}>
    
    </div>`;
  });
};

button.addEventListener("click", handleClickFunction);
