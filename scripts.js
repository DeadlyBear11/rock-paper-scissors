// Function for the computer to randomly return rock, paper or scissors.
function getComputerChoice() {
    let computerSelection = Math.ceil(Math.random() * (4 - 1));

    switch (computerSelection) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
    }

    return computerSelection;
}

// Function to play a single round.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "scissors":
                return "You win! Rock beats scissors.";
            case "paper":
                return "You lose! Paper beats rock.";
            case "rock":
                return "It's a tie! Both selected rock.";
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "scissors":
                return "You lose! Scissors beats paper.";
            case "paper":
                return "It's a tie! Both selected paper.";
            case "rock":
                return "You win! Paper beats rock.";
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "scissors":
                return "It's a tie! Both selected scissors.";
            case "paper":
                return "You win! Scissors beats paper.";
            case "rock":
                return "You lose! Rock beats scissors.";
        }
    } else {
        return "I don't understand your selection.";
    }
}
// Ask for input and save it in a variable.
let playerSelection = (prompt("Type 'rock', 'paper' or 'scissors':")).toLowerCase();

// Compare the player selection and the computer selection
// and display winner of the round.
console.log(playRound(playerSelection,getComputerChoice()));

// Play five consecutive rounds and keep the score.
// Display the score after each round.
// Show the final score and the win or loss of the player.