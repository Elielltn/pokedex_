export class App {
  constructor() {
    this.offset = 0;
  }

  createPaginated() {
    return `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=12`;
  }

  async getPokemonDetails(urlPokemon) {
    try {
      const response = await fetch(urlPokemon);
      return response.json();
    } catch (error) {
      console.error(`Erro ao buscar o Pokémon: ${urlPokemon}`, error);
    }
  }

  async getPokemon(urlPokemon) {
    const pokemonDetails = await this.getPokemonDetails(urlPokemon);
    return [pokemonDetails];
  }

  async getPokemons(urlPokemons) {
    try {
      const response = await fetch(urlPokemons);
      const data = await response.json();
      const pokemonsDetailsPromises = data.results.map((pokemon) =>
        this.getPokemonDetails(pokemon.url)
      );
      const pokemonsDetails = await Promise.all(pokemonsDetailsPromises);
      this.offset += 12;
      return pokemonsDetails;
    } catch (error) {
      console.error(`Erro ao buscar os pokémons`, error);
    }
  }

  createPokeObject(pokemonDetailsArr) {
    return pokemonDetailsArr.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      type1: pokemon.types[0].type.name,
      type2: pokemon.types[1]?.type.name,
    }));
  }

  createPokeCard(pokemonObjects) {
    pokemonObjects.forEach((pokemonObject) => {
      const pokeLink = `/pokemon.html?pokemon=${pokemonObject.name}`;
      const type2HTML = pokemonObject.type2
        ? `<p class="type1 ${pokemonObject.type2}-type" id="type2">
            ${
              pokemonObject.type2.charAt(0).toUpperCase() +
              pokemonObject.type2.substring(1)
            }
          </p>`
        : "";

      pokedex.innerHTML += `
        <a href="${pokeLink}" id="pokemon-card">
          <div class="grid-item">
            <div class="img-container" id="img-container">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemonObject.id
              }.png"
                alt="${pokemonObject.name}" class="item-img" id="item-img" />
            </div>
            <div class="item-details" id="item-details">
              <p class="number" id="number">Nº${pokemonObject.id}</p>
              <p class="name" id="name">${pokemonObject.name}</p>
              <div class="types" id="types">
                <p class="type1 ${pokemonObject.type1}-type" id="type1">
                  ${
                    pokemonObject.type1.charAt(0).toUpperCase() +
                    pokemonObject.type1.substring(1)
                  }
                </p>
                ${type2HTML}
              </div>
            </div>
          </div>
        </a>
      `;
    });
  }

  async loadPokemons(urlOrName) {
    let pokemonDetailsArray;

    if (urlOrName.startsWith("http")) {
      // URL padrão com offset → lista de vários
      pokemonDetailsArray = await this.getPokemons(urlOrName);
    } else {
      // É um nome (como "pikachu") → único Pokémon
      const url = `https://pokeapi.co/api/v2/pokemon/${urlOrName}`;
      pokemonDetailsArray = await this.getPokemon(url);
    }

    const pokemonObjects = this.createPokeObject(pokemonDetailsArray);
    this.createPokeCard(pokemonObjects);
  }

  async getPokemonCategory(pokemonId) {
    try {
      const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
      const response = await fetch(speciesUrl);
      const data = await response.json();
      const categoryObj = data.genera.find((g) => g.language.name === "en");
      return categoryObj ? categoryObj.genus : "Unknown";
    } catch (err) {
      console.error("Erro ao buscar categoria", err);
      return "Unknown";
    }
  }

  renderPokemonDetails(pokemon) {
    document.getElementById("pokemon-img").src = pokemon.imageUrl;
    document.getElementById("pokemon-img").alt = pokemon.name;
    document.getElementById("pokemon-name").textContent = pokemon.name;
    document.getElementById("pokemon-id").textContent = `Nº${pokemon.id}`;
    document.getElementById("pokemon-height").textContent = pokemon.height;
    document.getElementById("pokemon-weight").textContent = pokemon.weight;
    document.getElementById("pokemon-category").textContent = pokemon.category;

    const abilitiesEl = document.getElementById("abilities");
    abilitiesEl.innerHTML = "";
    pokemon.abilities.forEach(ability => {
      const span = document.createElement("span");
      span.textContent = ability;
      abilitiesEl.appendChild(span);
    });

    const typesEl = document.querySelector(".types");
    typesEl.innerHTML = `
      <p class="type-1 ${pokemon.type1}-type">${pokemon.type1}</p>
      ${pokemon.type2 ? `<p class="type-2 ${pokemon.type2}-type">${pokemon.type2}</p>` : ""}
    `;
  }

  async loadPokemon(urlOrName) {
    try {
      const pokemon = await this.getPokemonDetails(urlOrName);
      const category = await this.getPokemonCategory(pokemon.id);

      const pokemonObj = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height / 10 + " m",
        weight: pokemon.weight / 10 + " kg",
        abilities: pokemon.abilities.map((a) => a.ability.name),
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1]?.type.name || null,
        category: category,
        imageUrl: pokemon.sprites.other["official-artwork"].front_default,
      };

      this.renderPokemonDetails(pokemonObj);
    } catch (error) {
      console.error("Erro ao carregar o Pokémon:", error);
    }
  }
}
