import Header from "./Header.js";
import PokeApi from "./PokeApi.js";
import Pokedesk from "./Pokedesk.js";
import Screen from "./Screen.js";
const root = document.getElementById('root');
const info = document.createElement('div');
//1008
let pokeId = 1;
const pokeapi = new PokeApi();
const res = async api =>{
  const data = await api.getPokemon();
  return data;
} 
pokeapi.pokemon = pokeId;
let pokemon = await res(pokeapi);
const screen = new Screen(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
const header = new Header();
const pokedesk = new Pokedesk();
root.appendChild(header.render());
info.appendChild(screen.render());
root.appendChild(info);
root.appendChild(pokedesk.render());
const rightControl = document.querySelector('.right-control');
const leftControl = document.querySelector('.left-control');
rightControl.addEventListener('click', async () => {
  if(pokeId === 1008) pokeId = 0;
  pokeapi.pokemon = ++pokeId;
  pokemon = await res(pokeapi);
  screen.update(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
  info.replaceChild(screen.render(),info.firstChild);
});
leftControl.addEventListener('click', async () => {
  if(pokeId === 1) pokeId = 1009;
  pokeapi.pokemon = --pokeId;

  pokemon = await res(pokeapi);
  screen.update(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
  info.replaceChild(screen.render(),info.firstChild);

});


