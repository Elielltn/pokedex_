import { App } from "./app.js";

const app = new App();
const pokeImg = document.getElementById("pokemon-img").src;
const pokeAlt = document.getElementById("pokemon-img").alt;
const pokemonName = document.getElementById("pokemon-name").textContent;
const pokemonHeight = document.getElementById("pokemon-height").textContent;
const pokemonCategory = document.getElementById("pokemon-category").textContent;
const pokemonWeight = document.getElementById("pokemon-weight").textContent;
const pokemonId = document.getElementById("pokemon-id").textContent;

// Captura o nome ou ID do Pokémon na URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonNameOrId = urlParams.get("pokemon"); // Exemplo: pokemon=bulbasaur ou pokemon=1
const getPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

app.loadPokemon(getPokemonUrl);


// async function getPokemonDetailsa(nameOrId){
//   const response = await fetch(``)
//   const pokemon = await response.json()
//   const category = await getPokemonCategory(nameOrId)

//   pokemonObj = {
//     img:pokemon.sprites.other["official-artwork"].front_default,
//     name: pokemon.name,
//     id: `N° ${String(pokemon.id).padStart(4, '0')}`,
//     height:pokemon.height,
//     weight:pokemon.weight,
//     category: category,
//     abilities: pokemon.abilities.map(element => element.ability.name),
//     type1: pokemon.types[0].type.name,
//     type2: pokemon.types[1]?.type.name,

//   }
//   generatePage(pokemonObj)
// }

// document.addEventListener(
//   "DOMContentLoaded",
//   getPokemonDetails(pokemonNameOrId)
// );

// // Função para buscar os detalhes do Pokémon
// function getPokemonDetails(nameOrId) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
//     .then(response => response.json())
//     .then(pokemon => {
//       console.log(pokemon)
//       document.getElementById("pokemon-name").textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//       document.getElementById("pokemon-id").textContent = `ID: ${pokemon.id}`;
//       const pokemonDetails = `
//         <div>
//           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
//           <p>Tipo 1: ${pokemon.types[0].type.name}</p>
//           ${pokemon.types[1] ? `<p>Tipo 2: ${pokemon.types[1].type.name}</p>` : ''}
//           <p>Altura: ${pokemon.height / 10} m</p>
//           <p>Peso: ${pokemon.weight / 10} kg</p>
//         </div>
//       `;
//       document.getElementById("pokemon-details").innerHTML = pokemonDetails;
//     })
//     .catch(error => console.error('Erro ao buscar Pokémon:', error));
// }

// // Chama a função para obter os dados do Pokémon
// console.log(pokemonObj)
