const quizData = [
    {
        question: "Who was called Al-Farooq?",
        a: "Abu Bakr",
        b: "omar Ibn Al-Khattab",
        c: "Uthman Ibn Affan",
        d: "Ali Ibn Abi Talib",
        correct: "b",
    },
    {
        question: "Who is the prophet who died and was not buried?",
        a: "Idris",
        b: "Yousef",
        c: "Soliman",
        d: "Isa",
        correct: "a",
    },
    {
        question: "What is the name of the sword of our master Ali bin Abi Talib?",
        a: "Al-Battar",
        b: "Mathur",
        c: "Dhū al-faqār",
        d: "Al-Mukhdham",
        correct: "c",
    },
    {
        question: "Who is the companion nicknamed The Bare-chested Devil?",
        a: "Khaled Ibn Al-Waled",
        b: "Amr Ibn Al-eas",
        c: "Hamza Ibn Abi Talib",
        d: "Al-Dirar Ibn Al-Azur",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})