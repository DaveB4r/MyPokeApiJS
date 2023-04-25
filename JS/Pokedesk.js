export default class Pokedesk{
  
  controls(){
    const div = document.createElement('div');
    div.className = 'controls';
    div.innerHTML = `
      <div class="arrow left-control"></div>
      <div class="arrow right-control"></div>
    `;
    return div;
  }
  render(){
    const div = document.createElement('div');
    const controls = this.controls();
    div.className = 'pokedesk';
    div.appendChild(controls);
    return div;    
  }
}