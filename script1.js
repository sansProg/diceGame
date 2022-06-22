
// returns a random numbr from 1-6
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
  // Math.random returns a random num from interval [0,1). so we multiply it by 6 to get number from interval [0,6) and we round off that number using Math.floor that the number generated will be a whole number belonging to interval [0,5] and we added 1 to get a whole number from interval [1,6]
}

// update image based on the dice roll 
function updateImg(classs, n) {
  document
    .querySelector(classs) 
    .setAttribute("src", "images/dice" + n + ".png");
    // here, query selector selects the first selector having the class as classs  and setattribute sets the attribute passed in as 1st parameter to the second parameter , ie sets src to the specified position as 2nd parameter
}

function displayResult(result) {
  document.querySelector("h1").innerHTML = result;
  // innerHTML gives all the content inside an Object, here all the content in the h1 tag
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
