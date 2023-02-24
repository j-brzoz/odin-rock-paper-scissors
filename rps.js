/* WITHOUT UI
function getComputerChoice(){
    let randomNum = Math.round(Math.random()*100);
    let num = (randomNum % 3) + 1;
    
    if(num == 1){
        alert("Computer chose rock!");
        return "rock";
    }
    else if(num == 2){
        alert("Computer chose paper!");
        return "paper";
    }
    else{
        alert("Computer chose scissors!");
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();

    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("You gave incorrect input! Try again");
        playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        if(playerSelection == "scissors")
            alert("You won, " + playerSelection + " beat "+ computerSelection + "!");
        else
            alert("You won, " + playerSelection + " beats "+ computerSelection + "!");
        
        return 1;
    }
        
    else if( playerSelection == computerSelection){
        alert("It was a draw, both of you chose the same thing!");
        return 0;
    }
    else{
        if(computerSelection == "scissors")
            alert("You lost, " + computerSelection + " beat "+ playerSelection + "!");
        else
            alert("You lost, " + computerSelection + " beats "+ playerSelection + "!");

        return -1;
    }
}


function game(){
    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        
        if(roundResult == 1)
            playerScore++;
        else if(roundResult == 0){
            playerScore++;
            computerScore++;
         }
        else
            computerScore++;

        if(computerScore == 3 && playerScore != 3){
            alert("You lost " + playerScore + ":" + computerScore);
            return 1;
        }
        else if(playerScore == 3 && computerScore != 3){
            alert("You won " + playerScore + ":" + computerScore);
            return 1;
        }
        else if(playerScore == 3 && computerScore == 3){
            alert("It was a tie " + playerScore + ":" + computerScore);
            return 1;
        }
        else
            alert("The score is " + playerScore + ":" + computerScore);       
    }
    return 0;  
}
*/

// WITH UI
// scores
let playerScore = 0;
let computerScore = 0;

// getting random computer's choice
function getComputerChoice(){
    const randomNum = Math.round(Math.random()*100);
    const num = (randomNum % 3) + 1;
    
    if(num == 1){
        document.getElementById("computerChoice").innerHTML = "Computer's choice: rock";
        return "rock";
    }
    if(num == 2){
        document.getElementById("computerChoice").innerHTML = "Computer's choice: paper";
        return "paper";
    }
    
        document.getElementById("computerChoice").innerHTML = "Computer's choice: scissors";
        return "scissors";
    
}

// playing round with given choices
function playRound(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        playerScore++;
        displayScores(1, playerScore, computerScore);
    }   
    else if( playerSelection == computerSelection){
        playerScore++;
        computerScore++;
        displayScores(0, playerScore, computerScore);
    }
    else{
        computerScore++;
        displayScores(-1, playerScore, computerScore);
    }
}

// playing round with whatever user clicked
function playWithPlayerChoice(choice){
    const playerSelection = choice;
    document.getElementById("playerChoice").innerHTML = `Your choice: ${  choice}`;
    playRound( playerSelection, getComputerChoice());
}


// defining rock, paper, scissors and restart buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("restart");

// adding listeners to buttons
rock.addEventListener("click", () => playWithPlayerChoice("rock"));
paper.addEventListener("click", () => playWithPlayerChoice("paper"));
scissors.addEventListener("click", () => playWithPlayerChoice("scissors"));
restart.addEventListener("click", () => newGame());

// disalbing buttons if game ends
const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// printng scores
function displayScores(result, playerResult, computerResult){
    if(result == 1){
        document.getElementById("result").innerHTML = "You won that round!";
        document.getElementById("score").innerHTML = `you ${  playerResult  } - ${  computerResult  } computer`;
    }
    else if(result == 0){
        document.getElementById("result").innerHTML = "That round was a tie! You and computer chose the same thing!";
        document.getElementById("score").innerHTML = `you ${  playerResult  } - ${  computerResult  } computer`;
    }
    else if(result == -1){
        document.getElementById("result").innerHTML = "Computer won that round!";
        document.getElementById("score").innerHTML = `you ${  playerResult  } - ${  computerResult  } computer`;
    }

    // ending the game - message
    if(playerResult == 3 && computerResult != 3){
        document.getElementById("endgame").innerHTML = "You won the match! Congratulations! Wanna play again?";
        disableButtons();

    }
    else if(playerResult != 3 && computerResult == 3){
        document.getElementById("endgame").innerHTML = "Computer won the match! Redemption time?";
        disableButtons();
    }
    else if(playerResult == 3 && computerResult == 3){
        document.getElementById("endgame").innerHTML = "The match ended in a draw. Wanna see who's really better?";
        disableButtons();
    }
}

// restarting the game
function newGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("playerChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("score").innerHTML = `you ${  playerScore  } - ${  computerScore  } computer`;
    document.getElementById("endgame").innerHTML = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

