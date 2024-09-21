// quiz.js

// Quiz data - Pakistan General Knowledge
const quizData = [
    {
        question: "What is the national language of Pakistan?",
        options: ["Urdu", "Punjabi", "Sindhi", "Pashto"],
        correct: "Urdu"
    },
    {
        question: "Who is the founder of Pakistan?",
        options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Liaquat Ali Khan", "Ayub Khan"],
        correct: "Muhammad Ali Jinnah"
    },
    {
        question: "What is the capital city of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correct: "Islamabad"
    },
    {
        question: "When did Pakistan gain independence?",
        options: ["14th August 1945", "14th August 1947", "14th August 1949", "23rd March 1956"],
        correct: "14th August 1947"
    },
    {
        question: "Which is the national flower of Pakistan?",
        options: ["Rose", "Jasmine", "Sunflower", "Tulip"],
        correct: "Jasmine"
    },
   
];

let currentQuestion = 0;
let score = 0;

// Get DOM elements
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelectorAll('label');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const submitBtn = document.getElementById('submit');

// Load quiz question
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    
    optionsEl.forEach((label, index) => {
        label.textContent = currentQuizData.options[index];
        radioButtons[index].value = currentQuizData.options[index];
    });
    
    resetSelection(); // Reset radio button selection after each submission
}

// Reset radio button selection
function resetSelection() {
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

// Check if the selected answer is correct
function checkAnswer() {
    let selectedAnswer;
    
    // Find which radio button is selected
    radioButtons.forEach(radio => {
        if (radio.checked) {
            selectedAnswer = radio.value;
        }
    });

    if (selectedAnswer) {
        // Check if the selected answer is correct
        if (selectedAnswer === quizData[currentQuestion].correct) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! The correct answer is: " + quizData[currentQuestion].correct);
        }

        // Move to next question or show final score
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showScore();
        }
    } else {
        alert("Please select an answer!");
    }
}

// Display final score
function showScore() {
    document.querySelector('.Quiz-section').innerHTML = `
        <h2>Your score is ${score} out of ${quizData.length}.</h2>
        <button onclick="location.reload()">Reload Quiz</button>
    `;
}

// Event listener for the submit button
submitBtn.addEventListener('click', checkAnswer);

// Load the first quiz question when the page loads
loadQuiz();
