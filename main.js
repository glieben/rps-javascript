function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock"
    }

    else if (randomNumber == 1) {
        return "paper"
        }

    else if (randomNumber == 2) {
        return "scissors"
        } 
}

const userInputWords = ["rock" , "paper" , "scissors"];

function getUserChoice() {
    let userInput = prompt("Enter Rock, Paper or Scissors.").toLowerCase();
    while (!userInputWords.includes(userInput)) {
        userInput = prompt("enter Rock, Paper or Scissors.").toLowerCase();
    }
    return userInput
}

let userPoints = 0
let computerPoints = 0

function game() {
    while (userPoints < 5 && computerPoints < 5) {
        userInput = getUserChoice();
        computerInput = getComputerChoice();

        if (computerInput === "rock" ) {

            if (userInput === "rock" ) {
                result = "draw"
            }

            else if (userInput === "paper" ) {
                result = "win"
            }

            else if (userInput === "scissors" ) {
                result = "loss"
            }
        } 

        else if (computerInput === "paper" ) {

            if (userInput === "rock" ) {
                result = "loss"
            }

            else if (userInput === "paper" ) {
                result = "draw"
            }

            else if (userInput === "scissors" ) {
                result = "win"
            }
        } 

        else if (computerInput === "scissors" ) {

            if (userInput === "rock" ) {
                result = "win"
            }

            else if (userInput === "paper" ) {
                result = "loss"
            }

            else if (userInput === "scissors" ) {
                result = "draw"
            }
        } 
        if (result == "draw") {
            alert("Draw!")
        }

        else if (result == "win") {
            alert("Win")
            userPoints = +userPoints + +1;
        }

        else if (result == "loss") {
            alert("Loss")
            computerPoints = +computerPoints + +1;
        }
    }
    
    if (userPoints == 5) {
        alert(`YOU WIN! | user:${userPoints} computer:${computerPoints}` )
    }

    else if (computerPoints == 5) {
        alert(`YOU LOSE! | computer:${computerPoints} user:${userPoints}` )
    }
}

