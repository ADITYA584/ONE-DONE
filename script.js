'use strict';

let currscore = document.querySelectorAll('.currscore');
let image = document.querySelector('img');
let score = document.querySelectorAll('.score');

let value = 0;
let chance = true;
let i = 0;

document.querySelector('.rolldice').addEventListener('click', function () {
  let diceval = Math.trunc(Math.random() * 6) + 1;
  value += diceval;
  if (diceval == 1) {
    if (chance) {
      document.querySelector('.left').classList.remove('color');
      document.querySelector('.right').classList.add('color');
    } else {
      document.querySelector('.right').classList.remove('color');
      document.querySelector('.left').classList.add('color');
    }
    chance = !chance;
    image.classList.add('hidden');

    currscore[`${i}`].textContent = 0;
    i = (i + 1) % 2;
    value = 0;
  }

  if (chance) {
    if (value != 0) {
      image.classList.remove('hidden');
      let sc = `./dice-${diceval}.png`;
      image.src = sc;
    }

    currscore[`${i}`].textContent = value;
  } else {
    if (value != 0) {
      image.classList.remove('hidden');
      let sc = `./dice-${diceval}.png`;
      image.src = sc;
    }
    currscore[`${i}`].textContent = value;
  }
});

document.querySelector('.hold').addEventListener('click', function () {
  score[`${i}`].textContent = Number(score[`${i}`].textContent) + value;
  console.log(score[0].textContent);
  console.log(score[1].textContent);
  if (score[`${i}`].textContent >= '100') {
    chance = true;
    document.querySelector('.right').classList.remove('color');
    document.querySelector('.left').classList.add('color');
    image.classList.add('hidden');
    currscore[`${i}`].textContent = 0;
    score[0].textContent = 0;
    score[1].textContent = 0;
    value = 0;
    confirm(`CONGRTULATIONS PLAYER ${i + 1} HAS WON THIS MATCH`);
    i = 0;
  } else {
    if (chance) {
      document.querySelector('.left').classList.remove('color');
      document.querySelector('.right').classList.add('color');
    } else {
      document.querySelector('.right').classList.remove('color');
      document.querySelector('.left').classList.add('color');
    }

    chance = !chance;
    image.classList.add('hidden');
    currscore[`${i}`].textContent = 0;

    value = 0;
    i = (i + 1) % 2;
  }
});

document.querySelector('.newgame').addEventListener('click', function () {
  chance = true;
  document.querySelector('.right').classList.remove('color');
  document.querySelector('.left').classList.add('color');
  image.classList.add('hidden');
  currscore[`${i}`].textContent = 0;
  score[0].textContent = 0;
  score[1].textContent = 0;
  i = 0;
  value = 0;
});
document.querySelector('.instruction').addEventListener('click', function () {
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.rules').classList.remove('hidden');
});

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape') {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.rules').classList.add('hidden');
  }
});
