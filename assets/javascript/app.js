var panel = $('#questions');
var timerCountdown = 30;

//click events

$(document).on('click', '#start-over', function (e) {
    game.reset();
});

$(document).on('click', '.answer-button', function (e) {
    game.clicked();
});

$(document).on('click', '#start', function (e) {
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

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: timerCountdown,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions.length; i++) {
            panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answer[i] + '">' + questions[this.currentQuestion].answers[i] + '</button>');
        }
    },

    nextQuestion: function () {
        game.counter = timerCountdown;
        $('#counter-number').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function () {
        clearInterval(timer);
        $('#counter-number').html(game.counter);

        panel.html('<h2>Out of Time!</h2>');
        panel.append('<h3>The correct answer is: ' + questions[this.currentQuestion].correctAnswer);
        panel.append('<img src ="' + questions[this.currentQuestion].image + '"/>');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function () {
        clearInterval(timer);

        panel.html('<h2>All done! Here\'s your score.</h2>');
        $('#counter-number').html(game.counter);
        panel.append('<h3>Correct Answers: ' + game.correct + '</h3');
        panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
        panel.append('<br><button id="start-over">Start Over?</button>');
    },

    clicked: function (e) {
        clearInterval(timer);

        if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly()
        } else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function() {
        game.incorrect++;
        clearInterval(timer);
        panel.html('<h2>Nope!</h2>');
        panel.append('<h3>The correct answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        panel.append('<img src="' + questions[game.currentQuestion].image + '"/>');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);            
        }else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    answeredCorrectly: function() {
        clearInterval(timer);
        game.correct++;
        panel.html('<h2>Correct!</h2>');
        panel.append('<img src="' + questions[game.currentQuestion].image + '"/>');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function() {
        this.currentQuestion = 0;
        this.counter = timerCountdown;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};



