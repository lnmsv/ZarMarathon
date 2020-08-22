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
  changeHP(20, character);
  changeHP(20, enemy);
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
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBar(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  person.damageHP -= count;
  renderHP(person);
}

init();
