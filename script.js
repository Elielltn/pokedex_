const btnLoad = document.getElementById("btn-load");
const btnSearch = document.getElementById("btn-search");
const input = document.getElementById("input")
let pokedex = document.getElementById("pokedex");
let offset = 0;

// Gera a URL com base no offset e limit
function createPaginated() {
  return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`;
}

// Faz a requisição para cada Pokémon individualmente
function getPokemonDetails(urlPokemon) {
  return fetch(urlPokemon)
    .then((response) => response.json())
    .catch((error) =>
      console.error(`Erro ao buscar o Pokémon: ${urlPokemon}`, error)
    );
}

function createPokeObject(pokemonDetails) {
  return pokemonDetails.map(
    (pokemon) =>
      (obj = {
        id: pokemon.id,
        name: pokemon.name,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1]?.type.name, 
      })
  );
}

function createPokeCard(pokemonObjects) {
  pokemonObjects.forEach((pokemonObject) => {
    pokemonObject.type2
      ? (pokedex.innerHTML += `
         <div class="grid-item">
           <div class="img-container" id="img-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemonObject.id
              }.png"
              alt=""
              class="item-img"
              id="item-img"
            />
          </div>
          <div class="item-details" id="item-details">
            <p class="number" id="number">Nº${pokemonObject.id}</p>
            <p class="name" id="name">${pokemonObject.name}</p>
            <div class="types" id="types">
              <p class="type1 ${pokemonObject.type1}-type" id="type1">${
          pokemonObject.type1.charAt(0).toUpperCase() +
          pokemonObject.type1.substring(1)
        }</p>
              <p class="type1 ${pokemonObject.type2}-type" id="type2">${
          pokemonObject.type2.charAt(0).toUpperCase() +
          pokemonObject.type2.substring(1)
        }</p>
            </div>
          </div>
         </div>
    `)
      : (pokedex.innerHTML += `
          <div class="grid-item">
           <div class="img-container" id="img-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemonObject.id
              }.png"
              alt=""
              class="item-img"
              id="item-img"
            />
          </div>
          <div class="item-details" id="item-details">
            <p class="number" id="number">Nº${pokemonObject.id}</p>
            <p class="name" id="name">${pokemonObject.name}</p>
            <div class="types" id="types">
              <p class="type1 ${pokemonObject.type1}-type" id="type1">${
          pokemonObject.type1.charAt(0).toUpperCase() +
          pokemonObject.type1.substring(1)
        }</p>
              </div>
          </div>
         </div>
    `);
  });
}

function getPokemon(urlPokemon) {
  getPokemonDetails(urlPokemon)
    .then((pokemonDetails) => {
      let pokemonDetailsArr = [pokemonDetails];
      return createPokeObject(pokemonDetailsArr);
    })
    .then((pokemonObject) => {
      createPokeCard(pokemonObject);
    });
}

// Faz a primeira requisição e obtém as URLs dos Pokémon
function getPokemons(urlPokemons) {
  fetch(urlPokemons)
    .then((response) => response.json())
    .then((data) => {
      const pokemonUrls = data.results.map((pokemon) => pokemon.url); // Obtém apenas as URLs dos Pokémon

      // Chama getPokemon para cada URL e espera todas terminarem
      return Promise.all(pokemonUrls.map(getPokemonDetails)); //pokemonUrls.map((pokemonUrl) => getPokemonDetails(pokemonUrl))
    })
    .then((pokemonDetails) => {
      pokemonObjects = createPokeObject(pokemonDetails);
      return pokemonObjects; // Aqui os Pokémon já estão na ordem correta
    })
    .then((pokemonObjects) => {
      createPokeCard(pokemonObjects);
    })
    .catch((error) => console.error("Erro ao buscar os Pokémons:", error));
    offset += 12;
}

function searchPokemon(value){
  if (value !== '') {
    pokedex.innerHTML = ''
    offset = 0
    btnLoad.classList.add('hidden')
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${value}`)
    
  } else if (value == ''){
    pokedex.innerHTML = ''
    getPokemons(createPaginated())
    btnLoad.classList.remove('hidden')
  }
}

btnLoad.addEventListener("click", () => {
  getPokemons(createPaginated()); // Faz a requisição inicial
});

btnSearch.addEventListener("click", () => {
  searchPokemon(input.value)
})

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter"){
    searchPokemon(input.value)
  }
})
getPokemons(createPaginated());
