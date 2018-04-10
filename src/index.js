document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')
  pokemonContainer.addEventListener("click", flip)

  searchInput.addEventListener("keyup", search)
  function search(){
    pokemonContainer.innerHTML=""
    let searchQuery = searchInput.value
    let charList = [];
    for (var p in POKEMON["pokemons"]){
      if(POKEMON["pokemons"][p]["name"].match(searchQuery))
      {
        charList.push(POKEMON["pokemons"][p])
      }
    }
    for (var i = 0; i < charList.length; i++) {
      newPokemon = new Pokemon(charList[i]["name"], charList[i]["sprites"])
      pokemonContainer.innerHTML += newPokemon.render()
    }
  }

  function flip(e) {
    // name = e.path[0].id // must add id with the value of this.name to "p" tag in the render() function for this to work
    name = e.target.dataset.pokename
    const nameFront = document.getElementById(`${name}-front`)
    const nameBack = document.getElementById(`${name}-back`)
    if (nameFront.style.display == "block") {
      nameFront.style.display = "none"
      nameBack.style.display = "block"
    } else {
      nameFront.style.display = "block"
      nameBack.style.display = "none"
    }
  }
})
