const questions = [
    {
        Question: "What does HTML stand for?",
        answers: [
            { option: "HTML", cheak: true },
            { option: "HTMLang", cheak: false },
            { option: "HTMTransfer", cheak: false },
            { option: "HTMarkup", cheak: false }
        ]
    },
    {
        Question: "Which programming language is known as the 'language of the web'?",
        answers: [
            { option: "Java", cheak: false },
            { option: "Python", cheak: false },
            { option: "JavaScript", cheak: true },
            { option: "C++", cheak: false }
        ]
    },
    {
        Question: "What is the purpose of CSS in web development?",
        answers: [
            { option: "Interactive elements", cheak: false },
            { option: "Styling web pages", cheak: true },
            { option: "Server-side logic", cheak: false },
            { option: "Database management", cheak: false }
        ]
    },
    {
        Question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            { option: "//", cheak: true },
            { option: "--", cheak: false },
            { option: "/* */", cheak: false },
            { option: "#", cheak: false }
        ]
    },
    {
        Question: "What does API stand for?",
        answers: [
            { option: "Advanced Programming Interface", cheak: false },
            { option: "Application API", cheak: true },
            { option: "Automated Processing Interface", cheak: false },
            { option: "Application Program Interface", cheak: false }
        ]
    },
    {
        Question: "In JavaScript, what is the purpose of the 'addEventListener' method?",
        answers: [
            { option: "Variable creation", cheak: false },
            { option: "Error handling", cheak: false },
            { option: "Event handling", cheak: true },
            { option: "Asynchronous execution", cheak: false }
        ]
    }
];




var Index = 0;
const QuestonElement = document.getElementById('question');
const AnswerDiv = document.getElementById('answers');
const Nxt_btn = document.getElementById('Next-btn');
var buttonClicked = false;
function ShowQuestons() {
    const Cuurentquestion = questions[Index]
    QuestonElement.innerText = Cuurentquestion.Question
    AnswerDiv.innerHTML = ''
    Cuurentquestion.answers.forEach(answer => {
        var button = document.createElement('button')
        button.classList.add('btn')
        button.innerText = answer.option;
        AnswerDiv.appendChild(button);
        Nxt_btn.style.display = 'block'

        button.addEventListener('click', function () {
            buttonClicked = true
            if (answer.cheak == true) {
                button.style.backgroundColor = '#90EE90'


                // alert("Yeah!!You did it Now go for the next")

            } else {
                button.style.backgroundColor = '#FFA07A'
                // alert("Keep Trying dear it's okay to be wrong !!")
            }
        })
    });
}
Nxt_btn.addEventListener('click', function () {
    if (!buttonClicked) {
        alert('Please select the any answer of these')
    } else if (buttonClicked == true) {
        Index++
        ShowQuestons();
        buttonClicked = false
    }
})
ShowQuestons();




