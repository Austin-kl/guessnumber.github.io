"use strict";

/*
document.querySelector(".number").textConetnt = 13;
document.querySelector(".score").textConetnt = 20;

document.querySelector(".guess").value === 23
  ? (document.querySelector(".message").textContent = "Правильно!")
  : (document.querySelector(".message").textContent = "Не верно!");
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;

const findRandom = function () {
  let between;

  if (Number(document.querySelector(".rand-num").value) > 99) {
    between = 99;
  } else if (Number(document.querySelector(".rand-num").value) < 1) {
    between = 20;
  } else {
    between = Number(document.querySelector(".rand-num").value);
  }

  randomNum = Math.trunc(Math.random() * between) + 1;

  document.querySelector("#rand-between").textContent = between;
};

document.querySelector(".rand-num").addEventListener("input", findRandom);

let score = 20;
let highScore = 0;

const checkTrue = function () {
  const inputNumber = Number(document.querySelector(".guess").value);

  if (!inputNumber)
    document.querySelector(".message").textContent = "Введите число!";
  else if (inputNumber === randomNum) {
    document.querySelector(".message").textContent = "Правильно!";

    document.querySelector(".check").disabled = true;

    document.querySelector(".number").textContent = inputNumber;
    document.querySelector("body").style.backgroundColor = "#58c936";
    if (highScore < score) highScore = score;
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    if (inputNumber > randomNum) {
      document.querySelector(".message").textContent = "Много!";
    } else if (inputNumber < randomNum) {
      document.querySelector(".message").textContent = "Мало!";
    }
  }

  if (score === 0) {
    document.querySelector(".message").textContent = "Ты проиграл!";

    document.querySelector(".check").disabled = true;

    document.querySelector("body").style.backgroundColor = "#ff3b3b";
    document.querySelector(".rand-num").value = "";
    score = 20;

    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("#rand-between").textContent = 20;
    document.querySelector(".rand-num").addEventListener("input", findRandom);
  }

  document.querySelector(".highscore").textContent = highScore;

  document.querySelector(".guess").value = "";
};

document.querySelector(".check").addEventListener("click", checkTrue);

const reload = function () {
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".rand-num").value = "";
  score = 20;

  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#rand-between").textContent = 20;
  document.querySelector(".rand-num").addEventListener("input", findRandom);
};

document.querySelector(".again").addEventListener("click", reload);
