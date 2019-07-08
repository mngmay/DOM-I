const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

window.setInterval(timer, 10);
let msTensCount = 0;
let msHundredsCount = 0;
let secondOnesCount = 0;
let secondTensCount = 0;

function timer() {
  msTens.textContent = msTensCount;
  msHundreds.textContent = msHundredsCount;
  secondOnes.textContent = secondOnesCount;
  secondTens.textContent = secondTensCount;

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
            }
          }
        }
      }
    }
  }
}
