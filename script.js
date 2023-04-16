const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const tiesScoreDisplay = document.getElementById('ties-score');
const resultDisplay = document.getElementById('result');
const images = document.getElementById('images');

let playerScore = 0;
let computerScore = 0;
let tiesScore = 0;

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, result);
    updateScores(result);
    checkGameOver();
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function showResult(playerChoice, computerChoice, result) {
    const images = {
        rock: 'rock.png',
        paper: 'paper.png',
		scissors: 'scissors.png'
    };

    const playerImage = `<img src="${images[playerChoice]}" alt="${playerChoice}">`;
    const computerImage = `<img src="${images[computerChoice]}" alt="${computerChoice}">`;

    let resultMessage;

    if (result === 'tie') {
        resultMessage = "Döntetlen!";
    } else if (result === 'win') {
        resultMessage = "Nyertél!";
    } else {
        resultMessage = "Vesztettél!";
    }

    resultDisplay.innerHTML = `
        ${playerImage} vs ${computerImage}<br>
        <strong>${resultMessage}</strong>
    `;
}

function updateScores(result) {
    if (result === 'tie') {
        tiesScore++;
        tiesScoreDisplay.textContent = tiesScore;
    } else if (result === 'win') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        const message = playerScore === 5 ? "Gratulálok, te nyertél!" : "Sajnálom, a gép nyert!";
        alert(message);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tiesScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    tiesScoreDisplay.textContent = '0';
    resultDisplay.innerHTML = '';
}