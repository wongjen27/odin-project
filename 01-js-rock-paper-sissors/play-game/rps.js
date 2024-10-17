
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
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}


//**************** SCORE KEEPING ****************//


let humanScore = 0;
let computerScore = 0;



function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Rock and Rock. It is a tie.");
            return "tie"
        } else if (humanChoice === "paper") {
            console.log("Paper beats Rock. You get a point!");
            return "human"
        } else if (humanChoice === "scissors") {
            console.log("Rock beats Scissors. Computer gets a point.")
            return "computer"
        } else { console.log("uh oh. computer rock")}
    }
    if (computerChoice === "paper") {
        if (humanChoice === "paper") {
            console.log("Paper and Paper. It is a tie.");
            return "tie"
        } else if (humanChoice === "scissors") {
            console.log("Scissors beats Paper. You get a point!");
            return "human"
        } else if (humanChoice === "rock") {
            console.log("Paper beats Rock. Computer gets a point.")
            return "computer"
        } else { console.log("uh oh. computer paper")}
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "scissors") {
            console.log("Scissors and Scissors. It is a tie.");
            return "tie"
        } else if (humanChoice === "rock") {
            console.log("Rock beats Scissors. You get a point!");
            return "human"
        } else if (humanChoice === "paper") {
            console.log("Scissors beats Paper. Computer gets a point.")
            return "computer"
        } else { console.log("uh oh. computer scissors")}
    }

}



function game(num) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    let result = playRound(computerSelection,humanSelection);

    if (num <= 0) {
        if (humanScore === computerScore) {
            console.log("Game over. It is a tie.")
        } else if (humanScore > computerScore) {
            console.log("Game over. You win!")
        } else if (computerScore < humanScore) {
            console.log("Game over. You lose.")
        }
        return;
    }
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++
    }
    console.log("Curent human Score: " + humanScore)
    console.log("Curent computer Score: " + computerScore)

    game(num - 1)
}

game(5)
