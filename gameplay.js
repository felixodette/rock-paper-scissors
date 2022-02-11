let choice = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let hand = choice[Math.floor(Math.random() * choice.length)];
    return hand
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function playRound(playerSelection, computerSelection) {
    let player = titleCase(playerSelection);
    let computer = computerSelection;

    if (player === computer) {
        return "It's a tie."
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissor" && computer === "Paper") ) {
        return `You Win! ${player} beats ${computer}`
    } else {
        return `You Lose! ${computer} beats ${player}`
    }
}

const computerSelection = computerPlay();
const playerSelection = 'rock';
const result = playRound(playerSelection, computerSelection)

console.log(result)

