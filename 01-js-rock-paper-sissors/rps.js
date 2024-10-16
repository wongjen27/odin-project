
// COMPUTER CHOICE //

let getComputerChoice = () => {
    let choice = getRandomIntInclusive(0,2);
    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper"
    } else {
        return "Sissors"
    }
}

console.log(getComputerChoice())


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }


// GET HUMAN CHOICE //

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "Rock"
    } else if (choice === "paper") {
        return "Paper "
    } else if (choice === "scissors") {
        return "Scissors"
    }
}

console.log(getHumanChoice())

// SCORE KEEPING //

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        humanScore = humanScore - 1;
        computerScore = computerScore + 1;
        return "You lose. Paper beats rock."
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))
