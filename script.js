// Quiz Controller Fxn:
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionsIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionsIndex;
}

Quiz.prototype.guess = function (answer) {
    if(this.getQuestionIndex ().correctAnswer (answer)) {
        this.score++;
    }

    this.questionsIndex++;
}

// Questions Fxn:
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//App fxn
function populate () {
    if(quiz.isEnded () ) {
        showScores();
    } 
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++) {
           var element = document.getElementById("choice" + i); 
           element.innerHTML = choices[i];
           guess("btn" + i, choices[i]); 
        }

    showProgress();
  
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionsIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Final Result</h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + " out of 5 </h2>" + "</br>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

    let form = document.createElement('input-group');
    form.classList.add('form-control');
    form.innerHTML = "Name";
    document.getElementById("score").appendChild(form);

    let button = document.createElement('button');
    button.classList.add('btn','btn-success');
    button.innerHTML = "Submit";
    document.getElementById("score").appendChild(button);
    

    // NOT WORKING: nested fxns to store user data
    nameInput();

    var msgDiv = document.querySelector("#input-group");
    var nameInput = document.querySelector("#input-group");
    var submitButton = document.querySelector("#button");
    var userNameSpan = document.querySelector("#form-control");

    function displayMessage(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", type);
      }

    function nameInput(){
        var name = localStorage.getItem("input-group");
        if (!name) {
            return;
        }
        userNameSpan.textContent = name;
    }

    submitButton.addEventListener("button", function(event) {
        event.preventDefault();
      
        var name = document.querySelector("#form-control").value;
      
        if (name === "") {
          displayMessage("error", "name cannot be blank");
        } else {
          displayMessage("success", "Recorded successfully");
      
          localStorage.setItem("name", name);
        
          nameInput();
        }
      });

};

    //Logic from Question(text, choices, answer)
var questions = [
    new Question ("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question ("The condition in an 'if/else' statement is enclosed within ______.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question ("Arrays in Javascript can be used to store ______.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"),
    new Question ("String values must be enclosed within ______ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parantheses"], "quotes"),
    new Question ("A very useful tool used during development and debugging for printing content to the debugger is:", ["Javascript", "terminal/bash", "for loops", "console.log"], "terminal/bash")
];

var quiz = new Quiz(questions);

populate();

