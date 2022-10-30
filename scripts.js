// Computer randomly returns rock, paper or scissors.
function getComputerChoice() {
    let choice = Math.ceil(Math.random() * (4 - 1));

    switch (choice) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
    }

    return choice;
}

// Play a single round.
// Ask for input and save it in a variable.
// Compare the player selection and the computer selection.
// Display winner of the round.
// Play five consecutive rounds and keep the score.
// Display the score after each round.
// Show the final score and the win or loss of the player.