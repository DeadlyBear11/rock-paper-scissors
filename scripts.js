// Function for the computer to randomly return rock, paper or scissors.
function getComputerChoice() {
    let computerSelection = Math.ceil(Math.random() * 3);

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

// Function to play five consecutive rounds and keep the score.
function game() {
    // Keep the game score in a variable.
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        // Ask for input and save it in a variable.
        let playerSelection = (prompt("Type 'rock', 'paper' or 'scissors':")).toLowerCase();

        // Save the result of playRound in a variable.
        let result = playRound(playerSelection,getComputerChoice())

        // Compare the player selection and the computer selection
        // and display winner of the round.
        console.log(result);

        // Keep the score in every round.
        if (result == "You win! Rock beats scissors." || result == "You win! Paper beats rock." || result == "You win! Scissors beats paper.") {
            playerScore += 1;
        } else if (result == "You lose! Rock beats scissors." || result == "You lose! Paper beats rock." || result == "You lose! Scissors beats paper.") {
            computerScore += 1;
        }
    }

    // Show the final score.
    console.log(`Your score is: ${playerScore}.`);
    console.log(`The computer score is: ${computerScore}.`);

    // Show the win or loss of the player
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (playerScore < computerScore) {
        console.log("I'm sorry! You lost the game.");
    } else {
        console.log("The game ends in a tie!");
    }
}

// Run the game.
game();
