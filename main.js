const $btn = document.getElementById('btn-kick');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
}

const enemy = {
  name: 'Charmader',
  defaultHP: 100,
  damageHP: 100,
}

$btn.addEventListener('click', function() {
  console.log('Kick');
})

function init() {
  console.log('Start game');
  renderHPLife();
}

function renderHPLife() {
  const $character = document.getElementById('health-character');
  console.log($character.innerText);
  
