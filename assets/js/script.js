const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionArea = document.getElementById('question-area')
const question = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions
let currentQuestions

function startGame () {

}

function setNextQuestion () {

}

function showQuestion () {

}

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