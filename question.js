// Questions Fxn:
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}
// Quiz Controller Fxn:
function.Quiz(questions) {
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
    this.questionsIndex++;

    if(this.getQuestionIndex ().correctAnswer (answer)) {
        this.score++;
    }
}

//App fxn
function populate () {
    if(quiz.isEnded () ) {
        // showScores();
    } else {
        // show question
        var element = document.getElementById("question");
    }
}

    //Logic from Question(text, choices, answer)
var questions = [
    new Question ("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "4"),
    new Question ("The condition in an 'if/else' statement is enclosed within ______.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses")
    new Question ("Arrays in Javascript can be used to store ______.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
    new Question ("String values must be enclosed within ______ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parantheses"], "quotes")
    new Question ("A very useful tool used during development and debugging for printing content to the debugger is:", ["Javascript", "terminal/bash", "for loops", "console.log"], "terminal/bash")
];

var quiz = new Quiz(questions);

populate();

