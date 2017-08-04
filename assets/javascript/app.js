var MAX_TIME = 5;
var countdownDiv = $('#timer');

var choiceA = $('#answerA');
var choiceB = $('#answerB');
var choiceC = $('#answerC');
var choiceD = $('#answerD');
var startButton = $('#start');
var timer = null;
var currentCountdown;


function initTimer() {
    currentCountdown = MAX_TIME;
    countdownDiv.text(currentCountdown + " seconds");
}

function answerQuestion(choice) {
    stopTimer();
	if (currentCountdown === 0) {


// $("#answerA").html("Wrong! The answer is")
		}    




    // if (!choice) {
    //     $("#answerA").html("Wrong! The answer is")
    // }

stopTimer();


    //check if right/wrong
   //show right/wrong and image
}



// answerQuestionButton.on('click', function() {
//     //write your own code for getting the choice that they clicked.
//     var choice; //figure out how to set this!
//     answerQuestion(choice);
// });
startButton.on('click', function() {
    initTimer();
    //clear display
    //check if there is a next question
    //if so:
    //  displayQuestion();
    //  displayAnswers();
    //if not:
    //  go to end game results
    startNextTimer();
});

function stopTimer() {
    clearInterval(timer);
}

function startNextTimer() {
    function doCountdown() {
        currentCountdown--;
        countdownDiv.text(currentCountdown);
        if (currentCountdown === 0) {
            answerQuestion();
        }
    }
    timer = setInterval(doCountdown, 1000);
}

$(document).ready(function initPage() {
    initTimer();
})







var questionArray = [{
    question: "In what city does the office take place in?",
    answers: ["New york, NY", "Scranton, PA", "Nashua, NH", "Utica, NY"],
    solution: 1
}, {
    question: "Who is Phyllis married to?",
    answers: ["Bob Vance, of Vance Refrigeration", "Bob Vance, of Vance Heaters", "Todd Packer", "Roy"],
    solution: 0
}, {
    question: "What instrument does Kevin play?",
    answers: ["Tamborine", "Piano", "Guitar", "Drums"],
    solution: 3
}, {
    question: "Who's sister does Dwight sleep with?",
    answers: ["Angela's", "Pam's", "Ryan's", "Jim's"],
    solution: 1
}, {
    question: "Where does Jim propose to Pam?",
    answers: ["In front of their home", "At Nigagra Falls", "On the room of the office", "At a gas station"],
    solution: 3
}];


// var solutionArray = [questionArray[0].solution, questionArray[1].solution, questionArray[2].solution, questionArray[3].solution, questionArray[4].solution];




// function trivia (questionNumber) {
// $("#question").html(triviaCard1.question);
// $("#answer").html(triviaCard1.answers);


// }

// trivia();






var questionAnswer = [];
var showquestion;
var count = 0;




$("#start").click(startGame);






function displayQuestion() {
    $("#question").html(questionArray[count].question);
    $("#answerA").html(questionArray[count].answers[0])
    $("#answerB").html(questionArray[count].answers[1])
    $("#answerC").html(questionArray[count].answers[2])
    $("#answerD").html(questionArray[count].answers[3])
}



function nextQuestion() {
    count++;
 displayQuestion();
}

function startGame() {
    showQuestion = setInterval(nextQuestion, 5000);
    displayQuestion();

}

function stopGame() {
    clearInterval(showQuestion);
}

// $("#answerB").on("click", function() {
// var choice;

// choice = $("#answerB")

// if (choice === questionArray[0].solution) {

// alert("you win");

// }


// });




$(".answer").on("click", function() {
var choice;

choice = $(this).attr("choice");
choice = parseInt(choice);

if (choice === questionArray[0].solution) {

alert("you win!");

}

});




