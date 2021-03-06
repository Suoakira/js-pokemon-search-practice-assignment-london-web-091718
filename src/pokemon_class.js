
// let count = 0

class Pokemon {


    constructor(pokemon) {
        this.id = pokemon.id
        this.name = pokemon.name
        this.spriteFront = pokemon.sprites.front
        this.spriteBack = pokemon.sprites.back
        this.pokemonContainer = document.querySelector('#pokemon-container')
        // this.newCount = ++count
    }

    addPokemon() {
        const pokemonElement = document.createElement("div")
        pokemonElement.innerHTML = `
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="row pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
                <div style="width:96px;margin:auto">
                    <img id="${this.id}" 
                    data-action="flip" 
                    class="toggle-sprite" 
                    src="${this.spriteFront}">
                    
                    <button id="v${this.id}">delete</button>
                </div>
                </div>
            </div>

        `  

        this.pokemonContainer.appendChild(pokemonElement)

        const image = document.getElementById(this.id) // couldnt interopolate this with query selector

        let buttonDel = document.getElementById(`v${this.id}`)

        buttonDel.addEventListener("click", (event) => { 
            deletePokemon(this)
            .catch(error => console.log(error))
            pokemonElement.innerHTML = ""
        })

        image.addEventListener("click", () => {
            image.src = image.src === this.spriteFront ? this.spriteBack : this.spriteFront
        })  

        // if you want to do it on mouse over
        // image.addEventListener("click", () => image.src = `${this.spriteBack}`)
        // image.addEventListener("mouseout", () => image.src = `${this.spriteFront}`)

        

    }



}
