const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const digits = document.querySelector(".digits");

let interval;
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
                msTens.textContent = 0;
                msHundreds.textContent = 0;
                secondOnes.textContent = 0;
                secondTens.textContent = 1;
                digits.classList.add("redDigit", "digit");
                clearInterval(interval);
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

//Event Listener Functions

function flagIt() {
  if (
    // only allows Start to fire if all digits are set to 0
    msTensCount === 0 &&
    msHundredsCount === 0 &&
    secondOnesCount === 0 &&
    secondTensCount === 0
  ) {
    flag = true;
    interval = setInterval(timer, 10);
  }
}

function reset() {
  msTensCount = 0;
  msHundredsCount = 0;
  secondOnesCount = 0;
  secondTensCount = 0;

  if (secondTens.textContent == 1) {
    secondTens.textContent = 0;
    digits.classList.remove("redDigit");
    flag = false;
  }
}

//If you wanted to create buttons from JS only
// let startBtn = document.createElement("button");
// startBtn.textContent = "Start";

// let resetBtn = document.createElement("button");
// resetBtn.textContent = "Reset";

// digits.append(startBtn);
// digits.append(resetBtn);
