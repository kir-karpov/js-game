"use strict";

function playGuessingGame() {
  const maxAttempts = 10; 
  let attemptsLeft = maxAttempts;
  let secretNumber = generateSecretNumber();

  function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function askNumber() {
    const userNumber = prompt(`Угадай число от 1 до 100. Осталось попыток: ${attemptsLeft}`);

    if (userNumber === null) {
      alert("Игра окончена");
      return;
    } else if (isNaN(userNumber)) {
      alert("Введи число!");
    } else if (userNumber < 1 || userNumber > 100) {
      alert("Число должно быть от 1 до 100");
    } else if (userNumber < secretNumber) {
      alert(`Загаданное число больше. Осталось попыток: ${--attemptsLeft}`);
    } else if (userNumber > secretNumber) {
      alert(`Загаданное число меньше. Осталось попыток: ${--attemptsLeft}`);
    } else {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Хотите сыграть еще?")) {
        attemptsLeft = maxAttempts;
        secretNumber = generateSecretNumber();
      } else {
        return;
      }
    }

    if (attemptsLeft === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        attemptsLeft = maxAttempts;
        secretNumber = generateSecretNumber();
      } else {
        return;
      }
    }

    askNumber();
  }

  return askNumber;
}

const startGame = playGuessingGame();
startGame();