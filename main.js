import { App } from "./app.js";

const app = new App();
window.app = app; // Expor globalmente pro console

const btnSearch = document.getElementById("btn-search");
const btnLoad = document.getElementById("btn-load");
const input = document.getElementById("input");
const pokedex = document.getElementById("pokedex");

// Função auxiliar para limpar e buscar por nome ou id
const searchPokemon = () => {
  const value = input.value.trim().toLowerCase();
  if (value !== "") {
    pokedex.innerHTML = ""; // limpa os resultados anteriores
    btnLoad.classList.add("hidden"); // oculta o botão de carregar mais
    app.loadPokemons(value);
  } else {
    pokedex.innerHTML = "";
    btnLoad.classList.remove("hidden");
    app.offset = 0;
    app.loadPokemons(app.createPaginated());
  }
};

btnSearch.addEventListener("click", searchPokemon);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchPokemon();
  }
});

btnLoad.addEventListener("click", () => {
  app.loadPokemons(app.createPaginated());
});

// Carrega os 12 primeiros pokémons ao abrir
app.loadPokemons(app.createPaginated());
