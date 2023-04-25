export default class PokeApi{
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  async getPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`);
    const data = await response.json();
    return data;
  }
}