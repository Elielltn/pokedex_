// Captura o nome ou ID do Pokémon na URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonNameOrId = urlParams.get('pokemon'); // Exemplo: pokemon=bulbasaur ou pokemon=1

// Função para buscar os detalhes do Pokémon
function getPokemonDetails(nameOrId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then(response => response.json())
    .then(pokemon => {
      document.getElementById("pokemon-name").textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      document.getElementById("pokemon-id").textContent = `ID: ${pokemon.id}`;
      const pokemonDetails = `
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
          <p>Tipo 1: ${pokemon.types[0].type.name}</p>
          ${pokemon.types[1] ? `<p>Tipo 2: ${pokemon.types[1].type.name}</p>` : ''}
          <p>Altura: ${pokemon.height / 10} m</p>
          <p>Peso: ${pokemon.weight / 10} kg</p>
        </div>
      `;
      document.getElementById("pokemon-details").innerHTML = pokemonDetails;
    })
    .catch(error => console.error('Erro ao buscar Pokémon:', error));
}

// Chama a função para obter os dados do Pokémon
getPokemonDetails(pokemonNameOrId);
