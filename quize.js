let mcqdata = [
    {
        question: "Who is the father of the C programming language?",
        options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Charles Babbage"],
        correct: "Dennis Ritchie"
    },
    {
        question: "Which symbol is used to start a single-line comment in C?",
        options: ["//", "#", "/*", "\\--"],
        correct: "//"
    },
    {
        question: "What is the correct file extension for C programs?",
        options: [".cpp", ".py", ".c", ".java"],
        correct: ".c"
    },
    {
        question: "Which function is used to print output in C?",
        options: ["print()", "echo()", "printf()", "cout"],
        correct: "printf()"
    },
    {
        question: "Which data type is used to store a single character in C?",
        options: ["string", "char", "character", "text"],
        correct: "char"
    },
    {
        question: "What is the default return type of a function in C if not specified?",
        options: ["void", "int", "float", "double"],
        correct: "int"
    },
    {
        question: "Which of the following is a valid variable name in C?",
        options: ["1number", "number_1", "number-1", "@number"],
        correct: "number_1"
    },
    {
        question: "Which header file is required for using printf() and scanf() functions?",
        options: ["stdlib.h", "string.h", "stdio.h", "conio.h"],
        correct: "stdio.h"
    },
    {
        question: "Which keyword is used to declare a constant variable in C?",
        options: ["const", "static", "define", "constant"],
        correct: "const"
    },
    {
        question: "What will sizeof(char) return in C?",
        options: ["2 bytes", "1 bytes", "4 bytes", "Depends on compiler"],
        correct: "1 bytes"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector(".quizc");
    const questionElement = document.querySelector(".quizc .question");
    const optionsContainer = document.querySelector(".quizc .options");
    const nextButton = document.querySelector(".quizc .next");
    const resultScreen = document.querySelector(".result");
    const timerDisplay = document.querySelector(".quizc .timer");

    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    let timeLeft = 10;
    let timerInterval;

    const shuffleArray = array => array.slice().sort(() => Math.random() - 0.5);
    mcqdata = shuffleArray(mcqdata);

    if (resultScreen) resultScreen.style.display = "none";

    const startTimer = () => {
        clearInterval(timerInterval);
        timeLeft = 10;
        if (timerDisplay) timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

        timerInterval = setInterval(() => {
            timeLeft--;
            if (timerDisplay) timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                const currentQuestion = mcqdata[currentQuestionIndex];
                userAnswers[currentQuestionIndex] = {
                    question: currentQuestion.question,
                    userAnswer: "Not Answered",
                    correctAnswer: currentQuestion.correct,
                    isCorrect: false
                };
                displayNextQuestion();
            }
        }, 1000);
    };

    const checkAnswer = (selectedOption) => {
        clearInterval(timerInterval);
        const currentQuestion = mcqdata[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.correct;

        userAnswers[currentQuestionIndex] = {
            question: currentQuestion.question,
            userAnswer: selectedOption,
            correctAnswer: currentQuestion.correct,
            isCorrect: isCorrect
        };

        if (isCorrect) score++;

        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            if (button.innerHTML === currentQuestion.correct) button.classList.add("correct");
            if (button.innerHTML === selectedOption && !isCorrect) button.classList.add("incorrect");
        });
    };

    const createQuestion = () => {
        if (!mcqdata[currentQuestionIndex]) return;

        questionElement.innerHTML = mcqdata[currentQuestionIndex].question;
        const shuffledOptions = shuffleArray(mcqdata[currentQuestionIndex].options);
        optionsContainer.innerHTML = "";

        shuffledOptions.forEach((o) => {
            const buttonElement = document.createElement("button");
            buttonElement.classList.add("option");
            buttonElement.innerHTML = o;
            buttonElement.addEventListener("click", () => checkAnswer(o));
            optionsContainer.appendChild(buttonElement);
        });
        startTimer();
    };

    const populateResultScreen = () => {
        const scoreDisplay = resultScreen.querySelector("h2");
        if (scoreDisplay) scoreDisplay.innerHTML = `Your score: ${score}/${mcqdata.length}`;

        resultScreen.querySelectorAll(".mcq-container").forEach(el => el.remove());

        userAnswers.forEach((ans, index) => {
            const container = document.createElement("div");
            container.classList.add("mcq-container");

            const userAnswerText = ans.userAnswer;
            const isAnswered = userAnswerText !== 'Not Answered';

            container.innerHTML = `
                <div class="question">${index + 1}. ${ans.question}</div>
                <div class="user-ans">Your answer: <span class="${isAnswered && !ans.isCorrect ? 'incorrect-text' : ''}">${userAnswerText}</span></div>
                <div class="correct-ans">Correct answer: <span class="correct-text">${ans.correctAnswer}</span></div>
            `;
            resultScreen.insertBefore(container, resultScreen.querySelector(".retake"));
        });
    };

    const displayResult = () => {
        clearInterval(timerInterval);
        if (resultScreen && quizContainer) {
            populateResultScreen();
            resultScreen.style.display = "block";
            quizContainer.style.display = "none";
        }
    };

    const displayNextQuestion = () => {
        if (!userAnswers[currentQuestionIndex]) {
            const currentQuestion = mcqdata[currentQuestionIndex];
            userAnswers[currentQuestionIndex] = {
                question: currentQuestion.question,
                userAnswer: "Not Answered",
                correctAnswer: currentQuestion.correct,
                isCorrect: false
            };
        }

        if (currentQuestionIndex >= mcqdata.length - 1) {
            displayResult();
            return;
        }
        currentQuestionIndex++;
        createQuestion();
    };

    const resetQuiz = () => {
        currentQuestionIndex = 0;
        userAnswers = [];
        score = 0;
        mcqdata = shuffleArray(mcqdata);
        if (resultScreen && quizContainer) {
            resultScreen.style.display = "none";
            quizContainer.style.display = "block";
        }
        createQuestion();
    };

    if (nextButton) nextButton.addEventListener("click", displayNextQuestion);
    const retakeButton = document.querySelector(".result .retake");
    if (retakeButton) retakeButton.addEventListener("click", resetQuiz);

    createQuestion();
});
