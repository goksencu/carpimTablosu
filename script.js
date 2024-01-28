// script.js
let correctAnswer;

function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    document.getElementById('question').textContent = `${num1} x ${num2}`;
    document.getElementById('userAnswer').value = ''; // input field is cleared when a new question is generated
    // document.getElementById('message').textContent = 'Bravo, devam edelim ...'; // message is cleared when a new question is generated
}

function checkAnswer() {
    let userAnswer = document.getElementById('userAnswer').value;
    if (userAnswer == correctAnswer) {
        document.getElementById('message').textContent = 'Tebrikler';
        setTimeout(generateQuestion, 3000);
        document.getElementById('message').textContent = 'Bravo, devam edelim ...';
    } else {
        document.getElementById('message').textContent = 'Yanlış, tekrar dene';
        setTimeout(() => {
            document.getElementById('userAnswer').value = '';
        }, 2000);
    }
}

generateQuestion();