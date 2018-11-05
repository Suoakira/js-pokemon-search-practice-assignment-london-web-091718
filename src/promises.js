//get all the pokemon
const getPokemons = () =>
    fetch('http://localhost:3000/pokemon')
        .then(resp => resp.json())

//get a single pokemon
const getPokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon/${pokemon}`)
        .then(resp => resp.json())

//create a pokemon
const createPokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon)
}).then(resp => resp.json())

//delete a pokemon
const deletePokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
        method: "DELETE"
})

//update a pokemon
const updatePokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
        method: "patch",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon)
    })