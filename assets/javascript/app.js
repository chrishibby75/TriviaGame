var panel = $('#questions');
var timerCountdown = 30;

//click events

$(document).on('click', '#start-over', function (e) {
    game.reset();
});

$(document).on('click', '.answer-button', function(e){
    game.clicked();
});

$(document).on('click', '#start', function(e){
    $('#sub-box').prepend('<h2>Time Remaining: <span id="counter-number">30</span>Seconds</h2>');
    game.loadQuestion();
});


//trivia questions

var questions = [{
    question: "What city does Breaking Bad take place in?",
    answers: ["Los Angeles", "Albuquerque", "Phoenix", "Michoacan"],
    correctAnswer: "Albuquerque",
    image: "assets/images/abq.gif"
}, {
    question: "What/'s the name of the actor who plays Jesse?",
    answers: ["RJ Mitte", "Bryon Cranston", "Aaron Paul", "Al Pacino"],
    correctAnswer: "Bryon Cranston",
    image: "assets/images/aPaul.gif"
}, {
    question: "What type of weapon did the tweekers use to rob Skinny Pete?",
    answers: ["pistol", "a pointy finger in the pocket", "kife", "rocket launcher"],
    correctAnswer: "knife",
    image: "assets/images/skinnypete.gif"
}, {
    question: "What street alias does Walter White call himself?",
    answers: ["The man in white", "Heisenberg", "Lauenbrau", "Bert"],
    correctAnswer: "Heisenberg",
    image: "assets/images/heisenberg.gif"
}, {
    question: "What event does Walter miss while dropping off his first batch of product to Gus?",
    answers: ["The birth of his daughter", "Junior's birthday party", "A doctor appointment", "His favorite episode of MASH"],
    correctAnswer: "The birth of his daughter",
    image: "assets/images/pizza.gif"

}, {
    question: "Walt hires a shady lawyer.  What is the name of said lawyer?",
    answers: ["Johnny Cochran", "Chuck McGill", "Siegfried and Jensen", "Saul Goodman"],
    correctAnswer: "Sual Goodman",
    image: "assets/images/saul.gif"
}, {
    question: "Name of member of Jesse Pinkman's crew.",
    answers: ["Skinny Pete", "Badger", "Combo", "All of the above"],
    correctAnswer: "All of the above",
    image: "assets/images/friends.gif"
}, {
    question: "What is the name of the Gus Fring's restaurant?",
    answer: ["Taco Time", "Los Pollos Hermanos", "Tios", "Del Taco"],
    correctAnswer: "Los Pollos Hermanos",
    image: "assets/images/pollos.gif"
}];






