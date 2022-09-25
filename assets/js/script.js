const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionArea = document.getElementById('question-area')
const questionID = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions
let currentQuestions

startButton.addEventListener('click', startGame)

// function starts the game
function startGame () {
    console.log('Start!!!')

    // hides the start button
    startButton.classList.add('hide')
    // shuffles questions so they arent in the same order if the quiz is replayed.
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // sets current questions to 0, as 0 is always the first number in an array
    currentQuestions = 0
    // removes the class 'hide' from the question area, enabling it to be viewed.
    questionArea.classList.remove('hide')
    // sets the next question using the next question function below
    setNextQuestion()
}

// function sets the next question
function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestions])
}

// takes a question
function showQuestion (question) {
    questionID.innerText = question.question
}

// function resets the game area for next question
function reset () {

}

function selectAnswer(e) {

}

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
]