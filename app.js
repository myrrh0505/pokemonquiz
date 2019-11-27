// Array to store all question and answer information
let STORE = [
  {
    question:"Who is Ash's first pokemon?",
    answers: ["Pikachu",
              "Squirtle",
              "Bulbasaur",
              "Charmander"],
    correctAnswer: "Pikachu"
  },
  {
    question:"Which pokemon destroyed the lab at Cinnabar island?",
    answers: ["Pikachu", "Infernape", "Zizagoon", "Mewtwo"],
    correctAnswer: "Mewtwo"
  },
  {
    question:"Who is the biggest pokemon?",
    answers: ["Onyx", "Gyrados", "Wailord", "Kyorgre"],
    correctAnswer: "Wailord"
  },
  {
    question:"What is dragon type weak against??",
    answers: ["bug", "dark", "fire", "dragon"],
    correctAnswer: "dragon"
  },
  {
    question:"Who is the fastest pokemon?",
    answers: ["deoxys", "Ninjask", "Mewtwo", "electrode"],
    correctAnswer: "deoxys"
  },
  {
    question:"Who is the pre-evolve form of pikachu?",
    answers: ["raichu", "pichu", "palkia", "lucario"],
    correctAnswer: "pichu"
  },
  {
    question:"Who was the first pokemon ever created?",
    answers: ["rhydon", "mew", "pikachu", "charizard"],
    correctAnswer: "rhydon"
  },
  {
    question:"Who's bike did ash destroy?",
    answers: ["Misty", "Brock", "Gary", "Professor Oak"],
    correctAnswer: "Misty"
  },
  {
    question:"Where is the elite four located?",
    answers: ["Pallet Town", "Fuschia city", "Vermillion city", "Indigo Plateau"],
    correctAnswer: "Indigo Plateau"
  },
  {
    question:"What pokemon is named after Jackie Chan?",
    answers: ["Hitmonlee", "Hitmontop", "Hitmonchan", "Machamp"],
    correctAnswer: "Hitmonchan"
  }
  ];


//Variables containing score and question number
let score = 0;
let questionNumber = 0;


//This function is used to render all questions, answer choices, and score/question counters
function createThing () {

$('.question').text(STORE[questionNumber].question);

$('#choice0').text(STORE[questionNumber].answers[0]);
$('#choice1').text(STORE[questionNumber].answers[1]);
$('#choice2').text(STORE[questionNumber].answers[2]);
$('#choice3').text(STORE[questionNumber].answers[3]);

$('#option0').val( STORE[questionNumber].answers[0] );
$('#option1').val( STORE[questionNumber].answers[1] );
$('#option2').val( STORE[questionNumber].answers[2] );
$('#option3').val( STORE[questionNumber].answers[3] );

 let currentQuestionNumber = 
 $('.current-question').text(questionNumber + 1 + '/' + STORE.length);
 let currentScore =
 $('.current-score').text(score + '/' + STORE.length);

 $('.radioBtn').prop('checked', false);
 $('#nextBtn').hide();
}


//This function begins the quiz and hides the intro page
function startQuiz() {
  $('.quiz-page').hide();
  $('#play-again').hide();
  $('#feedback-message').hide();
  $('#nextBtn').hide()
  $('.finalContainer').hide();
  resetQuiz();
//start button event is here
  $('#startBtn').on('click', function (e){
    e.preventDefault();
    resetQuiz();
  $('.start-page').hide();
  $('.quiz-page').show();
  createThing();
  });

}

//creates an event when submit answer button is clicked
function submitAns() {
$('#radioAnswers').on ("submit", function (e){
  e.preventDefault();

  let answer = $("input[name=userPick]:checked").attr('value');
  
  checkAns(answer);
  $('#feedback-message').show();
  $('#nextBtn').show();
  $('.quiz-page').hide();
  questionFeedback();
  });
}

//checks the submitted answer 
function checkAns(answer) {
let correctChoice = STORE[questionNumber].correctAnswer;

if(answer === correctChoice) {
  questionFeedback(true);
  } else if (answer === undefined) {
    questionFeedback("unanswered");
  } else {
    questionFeedback(false);
    
};
}

//returns a feedback depending on if the answer was correct or not
function questionFeedback(userAnswer) {
let feedback = $('#feedback-message');
if (userAnswer === true) {
  score++ 
  feedback.text("Meowth that's right!");
} else if (userAnswer === false) {
  feedback.text("Incorrect!");
} else if (userAnswer === "unanswered") {
  feedback.text("You better choose a pokemon!");
};
}

//creates an event when the next question button is clicked
function nextQuestion () {
$('#nextBtn').on('click', function(e){
  questionNumber++;
  console.log(questionNumber)
  if (questionNumber === 10) {
    $('.finalBtn').show();
    $('#play-again').show();
    $('.finalContainer').show();
    $('#final-score').text('Your final score is: ' + score + '/10');
    $('.quiz-page').hide()
    $('#nextBtn').hide();
    $('#feedback-message').show()
  }else {
    $('.quiz-page').show()
    createThing();
  $('#feedback-message').hide();
};
  });
}

//creates an event for Another try button
function AnotherTry () {
  $('.finalBtn').on('click', function(e){
  e.preventDefault();
  $('finalContainer').empty();
  startQuiz();
  $('.quiz-page').hide();
  $('.start-page').show();
 });
}

//resets the score and question number back to 0 to restart quiz
function resetQuiz () {
score = 0;
questionNumber = 0;

}


//runs all the functions above
createThing();
startQuiz();
submitAns()
checkAns();
questionFeedback();
nextQuestion();
AnotherTry();
