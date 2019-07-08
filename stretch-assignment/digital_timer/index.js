const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

window.setInterval(timer, 100);
let msTensCount = 0;
let msHundredsCount = 0;

function timer() {
  msTens.textContent = msTensCount;
  msHundreds.textContent = msHundredsCount;
  if (msTensCount < 9) {
    msTensCount += 1;
    if (msTensCount === 9) {
      msTensCount = 0;
    }
    console.log(msTensCount);
  }
}
