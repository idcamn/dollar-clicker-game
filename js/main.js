let balance = 0;
let upgrade_levels = {
  click: 0,
  beggar: 0
}
const single_prices = {
  click: 25,
  beggar: 50
}

let balanceText = document.querySelector('#balance');
const clicker = document.querySelector('#clicker');
const pop = new Audio('../sounds/pop.mp3');
clicker.addEventListener("click", function() {
  balance++;
  balanceText.innerHTML = "$" + balance;
  if(pop.paused) {
    pop.play();
  } else {
    const newPop = pop.cloneNode().play();
    newPop.currentTime = 0;
    newPop.play();
  }

  checkUpgrades();
});

// проверка каждого из апгрейдов, если цена ниже баланса => убрать дизейблед с кнопки
function checkUpgrades() {

}
