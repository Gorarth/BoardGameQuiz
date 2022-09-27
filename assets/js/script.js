const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionArea = document.getElementById('question-area')
const questionID = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const endScreen = document.getElementById('end-screen')
const gameTitle = document.getElementById('game-title')
const endScreenScore = document.getElementById('end-screen-score')
let shuffledQuestions
let currentQuestions

startButton.addEventListener('click', startGame)

// this section is used to show the rules, when the rule button is clicked.
const rulesContainer = document.getElementById("rules")
const rulesButton = document.getElementById("rules-button")
rulesButton.addEventListener("click", showRules);

function showRules() {
    rulesContainer.classList.remove("hide");
    rulesButton.classList.add("hide");
}

// function starts the game
function startGame () {
    console.log('Start!!!')
    // hides rule button/rules/end screen - shows game title
    endScreen.classList.add('hide');
    rulesButton.classList.add("hide");
    rules.classList.add('hide')
    gameTitle.classList.remove('hide')
    // hides the start button
    startButton.classList.add('hide');
    // shuffles questions so they arent in the same order if the quiz is replayed.
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // sets current questions to 0, as 0 is always the first number in an array
    currentQuestions = 0
    // removes the class 'hide' from the question area, enabling it to be viewed.
    questionArea.classList.remove('hide')
    // sets the next question using the next question function below
    setNextQuestion()
}

let score = 0;



// function sets the next question
function setNextQuestion () {
    reset()
    showQuestion(shuffledQuestions[currentQuestions])
}

// takes a question
function showQuestion (question) {
    // takes the question text from our const and displays it
    questionID.innerText = question.question
    // creates a button for each of our answers
    question.answers.forEach(answer => {
        const button = document.createElement('button')
    // takes the text from our question answers and displays them
        button.innerText = answer.text
    // adds the class "btn" to each of the buttons created.
        button.classList.add('btn')
    // checks if the answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
    
}

// function resets the game area for next question
function reset () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    // removes previous answers and correctly shows the answers for the question given
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// checks correct answer by checking the dataset of correct if true. checks all buttons using the array.from and foreach =>
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestions + 1) {
        nextButton.classList.remove('hide')
    } 

    else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
        endScreen.classList.remove('hide')
        questionArea.classList.add('hide')
        gameTitle.classList.add('hide')

        if (score === 0) {
            endScreenScore.innerHTML = 
            `Lets check out that score...\n
            Oh dear...\n
            You didn't get any right!\n
            better refresh your mind and try again!`
        } else if (score === 1) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            Oh dear...
            You only got the 1 question right!
            Still, it's better than none I guess?`
        } else if (score === 2) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            Not bad... for a Meeple!
            You only got 2 right!
            Keep playing.. Maybe you'll improve?`
        } else if (score === 3) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            Not bad... for a Meeple!
            You got 3 right!
            Half way there until a master!`
        } else if (score === 4) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            Pretty good score!
            You got a total of 4!
            Almost there!`
        } else if (score === 5) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            Lets go!
            A total of 5!
            You know your Meeples from your Pawns!`
        } else if (score === 6) {
            endScreenScore.innerHTML = 
            `Lets check out that score...
            The Master has arrived!
            100% correct!
            You obviously no longer need the hint cards in Catan!`
        }
    }
    
}

// adds the class correct or wrong class when user clicks there choice.
function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// removes the above classes to reset for next question
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// event listener for when click on "next" and sets the next question
nextButton.addEventListener('click', () => {
    currentQuestions++
    setNextQuestion()
})



const questions = [
    {
        question: 'What game is based on this famous french fortified city?',
        answers: [
            {text: 'Carcassonne', correct: true},
            {text: 'Avignon', correct: false},
            {text: 'Langres', correct: false},
            {text: 'La Rochelle', correct: false},
        ]
    },
    {
        question: 'In Catan, what roll of the dice does the robber need in order to be activated?',
        answers: [
            {text: 'Snake eyes', correct: false},
            {text: '12', correct: false},
            {text: '7', correct: true},
            {text: '5', correct: false},
        ]
    },
    {
        question: 'At what age is Magnus Carlsen become a grandmaster?',
        answers: [
            {text: '12', correct: false},
            {text: '13', correct: true},
            {text: '14', correct: false},
            {text: '15', correct: false},
        ]
    },
    {
        question: 'What does the Monopoly Man wear on his eyes?',
        answers: [
            {text: 'Nothing', correct: true},
            {text: 'Round Framed Glasses', correct: false},
            {text: 'A Monocle', correct: false},
            {text: 'Sunglasses', correct: false},
        ]
    },
    {
        question: 'Which one of these are Ticket to Ride expansions?',
        answers: [
            {text: 'Russia', correct: false},
            {text: 'China', correct: false},
            {text: 'South America', correct: false},
            {text: 'Switzerland', correct: true},
        ]
    },

    {
        question: 'How many checkers does each person use per game?',
        answers: [
            {text: '13', correct: false},
            {text: '15', correct: true},
            {text: '17', correct: false},
            {text: '19', correct: false},
        ]
    },
]