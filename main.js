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

function game() {
    userInput = getUserChoice();
    computerInput = getComputerChoice();

    if (computerInput === "rock" ) {

        if (userInput === "rock" ) {
            result = "draw"
        }

        else if (userInput === "paper" ) {
            result = "You Win!"
        }

        else if (userInput === "scissors" ) {
            result = "You Lose!"
        }
    } 

    else if (computerInput === "paper" ) {

        if (userInput === "rock" ) {
            result = "You Lose!"
        }

        else if (userInput === "paper" ) {
            result = "draw"
        }

        else if (userInput === "scissors" ) {
            result = "You Win!"
        }
    } 

    else if (computerInput === "scissors" ) {

        if (userInput === "rock" ) {
            result = "You Win!"
        }

        else if (userInput === "paper" ) {
            result = "You Lose!"
        }

        else if (userInput === "scissors" ) {
            result = "draw"
        }
    } 
    alert(result)
}

