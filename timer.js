var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

    
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Please select your answer immediately";

  if(secondsLeft === 0) {
    alert("TIME IS UP!");
  }

}

setTime();

// Not sure how to make subtraction of time work
// function guess(id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function () {
//         quiz.guess(guess);
//         populate();
        
//         if(guess(id, guess:false);
//         secondsLeft -= 10;
//     }
// };