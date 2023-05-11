"use strict";

function playGuessingGame() {
  const secretNumber = 47;
  
  function askNumber(secretNumber) {
    const userNumber = prompt("Угадай число от 1 до 100");

    if (userNumber === null) {
      alert("Игра окончена");
    } else if (isNaN(userNumber)) {
      alert("Введи число!");
      askNumber(secretNumber);
    } else if (userNumber < 1 || userNumber > 100) {
      alert("Число должно быть от 1 до 100");
      askNumber(secretNumber);
    } else if (userNumber < secretNumber) {
      alert("Загаданное число больше");
      askNumber(secretNumber);
    } else if (userNumber > secretNumber) {
      alert("Загаданное число меньше");
      askNumber(secretNumber);
    } else {
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  return askNumber.bind(null, secretNumber);
}

const startGame = playGuessingGame();
startGame();