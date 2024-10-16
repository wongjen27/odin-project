
//**************** COMPUTER CHOICE ****************//

// 0. generate random integers
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// 1. each integer correspond with r, p or sc
let getComputerChoice = () => {
    let choice = getRandomIntInclusive(0,2);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

//**************** GET HUMAN CHOICE ****************//

// 2. use prompt to generate ask for r, p or sc

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock"
    } else if (choice === "paper") {
        return "paper"
    } else if (choice === "scissors") {
        return "scissors"
    }
}


//**************** SCORE KEEPING ****************//


    let humanScore = 0;
    let computerScore = 0;



function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Rock and Rock. It is a tie.");
        } else if (humanChoice === "paper") {
            humanScore = humanScore + 1;
            console.log("Paper beats Rock. You get a point!");
        } else if (humanChoice === "scissors") {
            computerScore = computerScore + 1;
            console.log("Rock beats Scissors. Computer gets a point.")
        } else { console.log("uh oh. computer rock")}
    }
    if (computerChoice === "paper") {
        if (humanChoice === "paper") {
            console.log("Paper and Paper. It is a tie.");
        } else if (humanChoice === "scissors") {
            humanScore = humanScore + 1;
            console.log("Scissors beats Paper. You get a point!");
        } else if (humanChoice === "rock") {
            computerScore = computerScore + 1;
            console.log("Paper beats Rock. Computer gets a point.")
        } else { console.log("uh oh. computer paper")}
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "scissors") {
            console.log("Scissors and Scissors. It is a tie.");
        } else if (humanChoice === "rock") {
            humanScore = humanScore + 1;
            console.log("Rock beats Scissors. You get a point!");
        } else if (humanChoice === "paper") {
            computerScore = computerScore + 1;
            console.log("Scissors beats Paper. Computer gets a point.")
        } else { console.log("uh oh. computer scissors")}
    }

}



const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(computerSelection, humanSelection)

console.log("Human Score: " + humanScore)
console.log("Computer Score: " + computerScore)
