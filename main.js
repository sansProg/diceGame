
// returns a random numbr from 1-6
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

// update image based on the dice roll 
function updateImg(classs, n) {
  document
    .querySelector(classs) 
    .setAttribute("src", "dice" + n + ".png");
}

function displayResult(result) {
  document.querySelector("h1").innerHTML = result;
}

var roll1 = diceRoll();
updateImg(".img1", roll1);

var roll2 = diceRoll();
updateImg(".img2", roll2);

if (roll1 > roll2) {
  displayResult("🚩 Player 1 won");
} else if (roll1 < roll2) {
  displayResult("Player 2 won 🚩");
} else {
  displayResult("Draw, refresh to play again");
}
