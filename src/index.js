const submitForm = document.querySelector("#pokemon-search-form")
const pokeList = document.querySelector("#pokemon-container")
const searchTerm = document.querySelector("#pokemon-search-input")
let filter = ""

let pokemonInstances = []

const addPokemons = pokemons =>
  pokemons.forEach(pokemon => {
      const pokemonInstance = new Pokemon(pokemon)
      pokemonInstances.push(pokemonInstance)
      pokemonInstance.addPokemon() 
    })


getPokemons() // contains the array of all the pokemon
  .then(pokemon => addPokemons(pokemon)) // renders a single pokemon


const searchPokemon = () => {

  filter = searchTerm.value
  let matches = pokemonInstances.filter(pokemon => pokemon.name.toLowerCase().includes(filter.toLowerCase()))

  pokeList.innerHTML = ""
  // document.querySelector("#pokemon-search-input").innerHTML = ""

  matches.forEach(pokemon => pokemon.addPokemon())

}

submitForm.addEventListener("keyup", (event) => {
  event.preventDefault()
  searchPokemon()
})









