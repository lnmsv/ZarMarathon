const $btn = document.getElementById('btn-kick');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 60,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
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
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressBar(person);
}

function renderHPLife(person) {
  person.elHP.innerText = character.damageHP + ' / ' + character.defaultHP;
}

function renderProgressBar(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

init();
