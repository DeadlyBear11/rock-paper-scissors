// Declaring different results.
const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";

// Declaring different combinations.
const rbs = "Rock beats scissors.";
const pbr = "Paper beats rock.";
const sbp = "Scissors beat paper.";

// Declaring ties combinations.
const bsr = "Both selected rock.";
const bsp = "Both selected paper.";
const bss = "Both selected scissors.";

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
                return `${win} ${rbs}`;
            case "paper":
                return `${lose} ${pbr}`;
            case "rock":
                return `${tie} ${bsr}`;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "scissors":
                return `${lose} ${sbp}`;
            case "paper":
                return `${tie} ${bsp}`;
            case "rock":
                return `${win} ${pbr}`;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "scissors":
                return `${tie} ${bss}`;
            case "paper":
                return `${win} ${sbp}`;
            case "rock":
                return `${lose} ${rbs}`;
        }
    } else {
        return "I don't understand your selection.";
    }
}

// Function to play five consecutive rounds and keep the score.
function playGame() {
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
        if (result === `${win} ${rbs}` || result === `${win} ${pbr}` || result === `${win} ${sbp}`) {
            playerScore += 1;
        } else if (result === `${lose} ${pbr}` || result === `${lose} ${sbp}` || result === `${lose} ${rbs}`) {
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

// Select parent element.
const container = document.querySelector("#container");
container.classList.add("section");

// Create three buttons.
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

// Add thext to the buttons.
btn1.appendChild(document.createTextNode("Rock"));
btn2.appendChild(document.createTextNode("Paper"));
btn3.appendChild(document.createTextNode("Scissors"));

// Append buttons to body.
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

// Add and display a div to show results.
const body = document.body;
const resultsDiv = document.createElement("div");
resultsDiv.classList.add("section");
body.appendChild(resultsDiv);

// Add a paragraph element to resultsDiv.
const para = document.createElement("p");
resultsDiv.appendChild(para);

// Function to understand user input, play a round and show a result.
let text = "";

function showResult(e) {
    let pSelection = e.path[0].innerText.toLowerCase();

    if (text) {
        para.removeChild(text);
    }

    text = document.createTextNode(`${playRound(pSelection, getComputerChoice())}`);
    para.appendChild(text);
}

// Add event-listeners to the buttons to show the results with text.
btn1.addEventListener("click", showResult);
btn2.addEventListener("click", showResult);
btn3.addEventListener("click", showResult);



// Run the game.
// playGame();
