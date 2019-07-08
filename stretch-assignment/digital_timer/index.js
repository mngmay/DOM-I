const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const digits = document.querySelector(".digits");

let interval = window.setInterval(timer, 10);
let msTensCount = 0;
let msHundredsCount = 0;
let secondOnesCount = 0;
let secondTensCount = 0;
let flag = false;

function timer() {
  msTens.textContent = msTensCount;
  msHundreds.textContent = msHundredsCount;
  secondOnes.textContent = secondOnesCount;
  secondTens.textContent = secondTensCount;
  if (flag) {
    if (msTensCount < 9) {
      msTensCount++;
      if (msTensCount === 9) {
        msTensCount = 0;
        if (msHundredsCount < 9) {
          msHundredsCount++;
          if (msHundredsCount === 9) {
            msHundredsCount = 0;
            if (secondOnesCount < 9) {
              secondOnesCount++;
              if (secondOnesCount === 9) {
                secondOnesCount = 0;
                secondTensCount++;
                if ((digits.textContent = "10:00")) {
                  digits.classList.add("redDigit", "digit");
                }
              }
            }
          }
        }
      }
    }
  }
}

//Event Listeners

document.querySelector(".start").addEventListener("click", flagIt);
document.querySelector(".reset").addEventListener("click", reset);

function flagIt() {
  flag = true;
}

function reset() {
  msTensCount = 0;
  msHundredsCount = 0;
  secondOnesCount = 0;
  secondTensCount = 0;
}

//If you wanted to create buttons from JS only
// let startBtn = document.createElement("button");
// startBtn.textContent = "Start";

// let resetBtn = document.createElement("button");
// resetBtn.textContent = "Reset";

// digits.append(startBtn);
// digits.append(resetBtn);
